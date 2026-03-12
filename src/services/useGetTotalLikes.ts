import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "@/server/client";

export interface GlobalStats {
  total_thoughts: number;
  total_likes: number;
}

export function useGlobalStats() {
  return useQuery<GlobalStats>({
    queryKey: ['global-stats'],
    queryFn: async () => {
      // 1. Hit the RPC
      const { data, error } = await supabaseClient.rpc('get_global_stats');

      // 2. Handle Postgres/Network Errors
      if (error) {
        console.error("Supabase RPC Error (get_global_stats):", error.message);
        throw new Error(error.message);
      }

      // 3. Handle Empty/Undefined Data
      if (!data) {
        console.warn("RPC returned no data. Ensure the function is granted to 'anon'.");
        return { total_thoughts: 0, total_likes: 0 };
      }

      // 4. Structural Validation
      // Ensure the keys exist before returning to prevent UI crashes
      const stats = {
        total_thoughts: Number(data.total_thoughts ?? 0),
        total_likes: Number(data.total_likes ?? 0),
      };

      return stats;
    },
    staleTime: 1000 * 120, // 2 minutes
    // Ensure the query doesn't keep retrying if the function is missing
    retry: 1, 
  });
}