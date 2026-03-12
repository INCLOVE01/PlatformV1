'use client'

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreatePostDialog from "./components/createPostDialog";
import WallDataContainer from "./components/wallData";
import { useGlobalStats } from "@/services/useGetTotalLikes";
import Useicon from "@/components/UseIcon";
import { Loader } from "@hugeicons/core-free-icons";

export default function SelfLoveWall() {
  const [filter, setFilter] = useState('recent');
  const { data: stats, isFetching: statsFetching } = useGlobalStats();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-rose-100">
      <div className="max-w-5xl mx-auto p-6 lg:p-12 space-y-12">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Wall Of <span className="text-rose-400">Love</span>
            </h1>
            <p className="text-slate-500 max-w-md leading-snug">
              A sanctuary for shared light and self-affirmation. Anonymous, safe, and supportive.
            </p>
          </div>

          <div className="w-full max-w-md flex items-center justify-between md:justify-end gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-rose-50 rounded-md p-2 outline outline-rose-200 text-center min-w-[80px]">
                <span className="text-lg font-bold text-rose-500 flex items-center justify-center">
                  {statsFetching ? <Useicon icon={Loader} className="w-4 h-4 animate-spin mr-1" /> : null}
                  {stats?.total_likes || 0}
                </span>
                <p className="text-[10px] uppercase font-bold text-rose-400">Total Loves</p>
              </div>
              <div className="bg-muted rounded-md p-2 border text-center min-w-[80px]">
                <span className="text-lg font-bold text-slate-700">{stats?.total_thoughts || 0}</span>
                <p className="text-[10px] uppercase font-bold text-slate-400">Thoughts</p>
              </div>
            </div>
            <CreatePostDialog />
          </div>
        </header>

        {/* FILTERS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Tabs value={filter} onValueChange={setFilter} className="w-full sm:w-auto">
            <TabsList className="bg-slate-100 p-1 border border-slate-200 rounded-lg">
              <TabsTrigger value="recent" className="px-6">Recent</TabsTrigger>
              <TabsTrigger value="likes" className="px-6">Most Loved</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* DATA CONTAINER - Key prop handles automatic page reset on filter change */}
        <WallDataContainer key={filter} filter={filter} />
      </div>
    </div>
  );
}