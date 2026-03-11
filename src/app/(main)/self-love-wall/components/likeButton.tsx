'use client'

import { useState } from "react";
import { supabaseClient } from "@/server/client";
import { db } from "@/db/db";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import { Heart } from "@hugeicons/core-free-icons";
import Useicon from "@/components/UseIcon";
import { safeRPC } from "@/server/actions";
import {  useQueryClient } from "@tanstack/react-query";
import { GlobalStats } from "@/services/useGetTotalLikes";

export default function LikeButton({ postId, initialLikes, hasLikedInitial }: { 
  postId: string, 
  initialLikes: number, 
  hasLikedInitial: boolean 
}) {
  const [liked, setLiked] = useState(hasLikedInitial);
  const [count, setCount] = useState(initialLikes);
  const [isSyncing, setIsSyncing] = useState(false);
  const queryClient = useQueryClient();

  const handleToggle = async () => {
    // 1. PREVENT DOUBLE SUBMISSIONS
    if (isSyncing) return;

    const previousLiked = liked;
    const previousCount = count;
    const isLiking = !liked;

    // 2. OPTIMISTIC UPDATE
    setLiked(isLiking);
    setCount(prev => isLiking ? prev + 1 : prev - 1);
    setIsSyncing(true);

    try {
      // 3. IDENTITY CHECK (Using the working filter method)
      const activeUser = await db.identities.filter(user => user.isActive === true).first();

      if (!activeUser?.email) {
        toast.error("Please sign in to like thoughts!");
        throw new Error("UNAUTHORIZED");
      }

      const email = activeUser.email.toLowerCase().trim();

      const data = await safeRPC('toggle_post_like',{
        p_post_id: postId,
        p_viewer_email: activeUser.email
      },'likes')
      queryClient.setQueryData(['global-stats'], (oldStats: GlobalStats | undefined) => {
      if (!oldStats) return oldStats;
      return {
        ...oldStats,
        total_likes: isLiking ? oldStats.total_likes + 1 : oldStats.total_likes - 1
      };
    });
      // 5. LOCAL PERSISTENCE (Dexie Transaction)
      await db.transaction('rw', [db.post_likes, db.posts], async () => {
        if (isLiking) {
  
        await db.post_likes.put({ 
          post_id: postId, 
          user_email: email,
          createdAt: Date.now() 
        });
      } else {
        // Use the exact same composite key format to delete
        await db.post_likes
          .where('[post_id+user_email]')
          .equals([postId, email])
          .delete();
      }
        
        // Ensure column name 'likes_count' matches your Postgres schema
        await db.posts.where('uid').equals(postId).modify({ likes: data.new_count });
      });

      setCount(data.new_count);

    } catch (err: any) {
      console.error("Like Toggle Failed:", err);
      
      // ROLLBACK UI ON FAILURE
      setLiked(previousLiked);
      setCount(previousCount);
      
      if (err.message !== "UNAUTHORIZED") {
        toast.error(err.message.includes("foreign key") 
          ? "Post no longer exists." 
          : "Cloud sync failed.");
      }
    } finally {
      // 6. RE-ENABLE BUTTON
      setIsSyncing(false);
    }
  }

  return (
    <button 
      onClick={handleToggle}
      disabled={isSyncing}
      className={`
        flex items-center gap-2 group transition-all px-2 py-1 rounded-full 
        ${liked ? 'bg-rose-50/30' : 'hover:bg-slate-50'}
        ${isSyncing ? 'opacity-50 cursor-not-allowed scale-95' : 'cursor-pointer active:scale-90'}
      `}
    >
      <div className="relative h-5 w-5 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {liked ? (
            <motion.div
              key="liked"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: [0, 1.3, 1], rotate: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-rose-500"
            >
              <Useicon icon={Heart} fill="currentColor" className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="unliked"
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              className="text-slate-300 group-hover:text-rose-300"
            >
              <Useicon icon={Heart} className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <span className={`
        text-xs font-bold tabular-nums transition-colors
        ${liked ? 'text-rose-500' : 'text-slate-400'}
        ${isSyncing ? 'animate-pulse' : ''}
      `}>
        {count}
      </span>
    </button>
  );
}