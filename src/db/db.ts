import Dexie, { Table } from "dexie";
import { Post } from "@/models/post";
import { Identity } from "@/models/identity";

export class IncloveDatabase extends Dexie {
  posts!: Table<Post, number>;
  identities!: Table<Identity, number>;
  sessions!: Table<{ id: string; value: unknown }, string>;
  kv!: Table<{ key: string; value: unknown }, string>; // General purpose store

  constructor() {
    super("IncloveDatabase");
    this.version(1).stores({
      posts: '++id, title',
      identities: '++id, &email, inclove_token, isActive, lastUsed, createdAt',
      sessions: 'id', // 'id' acts as the storage key (e.g., 'inclove-storage')
      kv: 'key'       // For general settings, flags, or local cache
    });
  }
}

export const db = new IncloveDatabase();