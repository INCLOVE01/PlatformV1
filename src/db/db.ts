import Dexie, { Table } from "dexie";
import { Post } from "@/models/post";
import { Identity } from "@/models/identity";

export class IncloveDatabase extends Dexie {
  posts!: Table<Post, number>;
  identities!: Table<Identity, number>;
  sessions!: Table<{ id: string; value: unknown }, string>;
  kv!: Table<{ key: string; value: unknown }, string>; 
  post_likes! : Table<{id?:string, post_id : string, user_email : string, createdAt : number,}>

  constructor() {
    super("IncloveDatabase");
    this.version(5).stores({
      posts: '++id, uid, content, createdAt, email, badge, likes, fullName, token',
      post_likes: '++id, &[post_id+user_email], post_id, user_email, createdAt',
      identities: '++id, &email, inclove_token, isActive, lastUsed, createdAt',
      sessions: 'id', // 'id' acts as the storage key (e.g., 'inclove-storage')
      kv: 'key'       // For general settings, flags, or local cache
    });
  }
}

export const db = new IncloveDatabase();