'use client'

import { useState } from "react";
import { useWallSubmission } from "@/services/useWallSubmission";
import { useGlobalStats } from "@/services/useGetTotalLikes";
import { PostSkeleton } from "./postCard";
import WallGrid from "./wallGrid";
import Pagination from "@/components/pagination";
export default function WallDataContainer({ filter }: { filter: string }) {
  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  const { data, isLoading, isError, isFetching } = useWallSubmission(filter, page, postsPerPage);
  const { data: stats } = useGlobalStats();
  
  const posts = data?.posts || [];
  const totalCount = stats?.total_thoughts || 0;
  const totalPages = Math.ceil(totalCount / postsPerPage);

  if (isLoading || (isFetching && posts.length === 0)) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array(postsPerPage).fill(0).map((_, i) => <PostSkeleton key={i} />)}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="col-span-full py-20 text-center bg-white border border-dashed rounded-2xl">
        <p className="text-slate-500 font-medium">Unable to connect to the wall. Please refresh.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <WallGrid posts={posts} isFetching={isFetching} />
      
      {totalPages > 1 && (
        <Pagination 
          currentPage={page} 
          totalPages={totalPages} 
          onPageChange={(newPage) => {
            setPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          isFetching={isFetching} 
        />
      )}
    </div>
  );
}