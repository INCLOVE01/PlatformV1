'use client'

import PostCard from "./postCard";
import Useicon from "@/components/UseIcon";
import { Message01FreeIcons } from "@hugeicons/core-free-icons";
import CreatePostDialog from "./createPostDialog";

export default function WallGrid({ posts, isFetching }: { posts: any[], isFetching: boolean }) {
  if (posts.length === 0 && !isFetching) {
    return (
      <div className="col-span-full py-24 flex flex-col items-center justify-center space-y-4 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div className="p-4 bg-slate-50 rounded-full">
          <Useicon icon={Message01FreeIcons} className="w-10 h-10 text-slate-300" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-900">The wall is quiet...</h3>
          <p className="text-slate-500 text-sm">Be the first to share your light.</p>
        </div>
        <CreatePostDialog />
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-300 ${isFetching ? 'opacity-50' : 'opacity-100'}`}>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}