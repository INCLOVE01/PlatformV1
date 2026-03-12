import { db } from "@/db/db";
import { useQuery } from "@tanstack/react-query";
import { silentSyncLikes } from "./useLikeSync";
import { safeRPC } from "@/server/actions";


export function useWallSubmission(sortBy = 'recent', page = 1, limit = 10) {
  return useQuery({
    queryKey: ['posts', sortBy, page, limit],
    queryFn: async () => {
      const activeUser = await db.identities.where('isActive').equals(1).first();
      const userId = activeUser?.inclove_token || '00000000-0000-0000-0000-000000000000';

      const data = await safeRPC('get_wall_posts',{
        p_viewer_id: userId,
        p_sort_by: sortBy === 'likes' ? 'most-liked' : 'recent',
        p_page: page,
        p_limit: limit

      },'wall')

      if (activeUser?.email) {
        silentSyncLikes(data, activeUser.email);
      }

      return { posts: data || [] };
    },
    staleTime: 1000 * 60 * 5,
  });
}