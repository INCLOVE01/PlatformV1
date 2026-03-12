'use client'

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/types/post";
import { motion,Variants } from 'motion/react'
import LikeButton from "./likeButton";

// 1. Define animation variants for the cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" // Ensure this is a valid string or it will still error
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    transition: { duration: 0.2 } 
  },
};

export default function PostCard({ id, full_name, badge, content, likes_count, hasLikedInitial }: Post) {
    return (
        <motion.div
            variants={cardVariants}
            layout // Smoothly animates when items around it change
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
            <Card className="border-rose-100 h-full shadow-sm overflow-hidden hover:border-rose-300 hover:shadow-md transition-all group bg-white rounded-3xl">
                <CardHeader className="flex flex-row justify-between items-center space-y-0">
                    <span className="font-bold text-slate-800 tracking-tight">{full_name}</span>
                    <Badge variant="secondary" className="bg-rose-50 text-rose-500 hover:bg-rose-100 border-none text-[10px] font-bold px-3">
                        {badge}
                    </Badge>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 leading-relaxed min-h-20">
                    {content}
                </CardContent>
                <CardFooter className="pt-0 flex justify-between items-center">
                    <LikeButton postId={id} 
                    initialLikes={likes_count} 
                    hasLikedInitial={hasLikedInitial}/>
                    <div className="text-xs text-slate-400 font-medium italic">
                        Shared with love
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

const PostSkeleton = () => {
    return (
        <Card className="border-slate-100 shadow-sm p-6 space-y-4 rounded-3xl bg-white">
            <div className="flex justify-between items-center">
                <Skeleton className="w-24 h-5 rounded-full bg-slate-100" />
                <Skeleton className="w-16 h-5 rounded-full bg-rose-50/50" />
            </div>
            <div className="space-y-3">
                <Skeleton className="w-full h-3 rounded-full bg-slate-50" />
                <Skeleton className="w-[90%] h-3 rounded-full bg-slate-50" />
                <Skeleton className="w-[40%] h-3 rounded-full bg-slate-50" />
            </div>
            <div className="pt-2">
                <Skeleton className="w-12 h-6 rounded-lg bg-slate-50" />
            </div>
        </Card>
    )
}

export { PostSkeleton }