// services/syncService.ts
import { db } from "@/db/db";

/**
 * Updates Dexie's knowledge of what the user likes based on 
 * data already fetched by the Wall UI. Zero extra API calls.
 */
export async function silentSyncLikes(posts: any[], userEmail: string) {
  if (!posts || !userEmail) return;

  const likedIdsFromSync = posts
    .filter(p => p.has_liked || p.hasLikedInitial)
    .map(p => p.id);

  const unlikedIdsFromSync = posts
    .filter(p => !p.has_liked && !p.hasLikedInitial)
    .map(p => p.id);

  await db.transaction('rw', [db.post_likes, db.posts], async () => {
    // 1. Bulk add likes found in the current view
    if (likedIdsFromSync.length > 0) {
      const batch = likedIdsFromSync.map(id => ({ 
        post_id: id, 
        user_email: userEmail 
      }));
      // Use put to avoid unique constraint errors in Dexie
      await db.post_likes.bulkPut(batch);
    }

    // 2. Remove unlikes found in the current view
    if (unlikedIdsFromSync.length > 0) {
      await db.post_likes
        .where('post_id')
        .anyOf(unlikedIdsFromSync)
        .and(l => l.user_email === userEmail)
        .delete();
    }
    
    // 3. Update local post counts for consistency
    for (const post of posts) {
      await db.posts.where('uid').equals(post.id).modify({ 
        likes: post.likes_count 
      });
    }
  });
}