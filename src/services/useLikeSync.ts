// services/syncService.ts
import { db } from "@/db/db";

// 1. Define the shape of the post object to remove 'any'
interface PostData {
  id: string;
  has_liked?: boolean;
  hasLikedInitial?: boolean;
  created_at?: string | number | Date;
  likes_count: number;
}

/**
 * Updates Dexie's knowledge of what the user likes based on 
 * data already fetched by the Wall UI. Zero extra API calls.
 */
export async function silentSyncLikes(posts: PostData[], userEmail: string): Promise<void> {
  if (!posts || !userEmail) return;

  const email = userEmail.toLowerCase().trim();

  // 2. Prepare data batches
  const likedPosts = posts.filter(p => p.has_liked || p.hasLikedInitial);
  const unlikedIds = posts
    .filter(p => !p.has_liked && !p.hasLikedInitial)
    .map(p => p.id);

  await db.transaction('rw', [db.post_likes, db.posts], async () => {
    
    // A. Bulk Add/Update Likes
    if (likedPosts.length > 0) {
      const batch = likedPosts.map(p => ({ 
        post_id: p.id, 
        user_email: email,
        // Ensure createdAt is a number (timestamp)
        createdAt: p.created_at ? new Date(p.created_at).getTime() : Date.now()
      }));
      
      await db.post_likes.bulkPut(batch);
    }

    // B. Remove Unlikes
    if (unlikedIds.length > 0) {
      // Use the composite index format [post_id, user_email]
      const deleteKeys = unlikedIds.map(id => [id, email]);
      await db.post_likes
        .where('[post_id+user_email]')
        .anyOf(deleteKeys)
        .delete();
    }
    
    // C. Update Local Post Counts
    for (const post of posts) {
      await db.posts.where('uid').equals(post.id).modify({ 
        // Changed 'likes' to 'likes_count' to match your schema
        likes: post.likes_count ?? 0
      });
    }
  });
}