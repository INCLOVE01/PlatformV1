import { create } from 'zustand'
import {createJSONStorage, persist, StateStorage} from 'zustand/middleware'
import { AuthSlice, createAuthSlice } from './slices/authSlice'
import { db } from '@/db/db'

type AppState = AuthSlice

//Just use db.kv.put({ key: 'notifications_enabled', value: true }).

export const GlobalStore = create<AppState>()(
    persist(
        (...a)=>({
            ...createAuthSlice(...a)
        }),
        {
            name: 'inclove-storage',
      storage: createJSONStorage(() => dexieStorage),
      partialize: (state) => ({ user: state.user }),
        }
    )
)


export const dexieStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    // Looks into the sessions table by default
    const item = await db.sessions.get(name);
    return item ? JSON.stringify(item.value) : null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await db.sessions.put({ id: name, value: JSON.parse(value) });
  },
  removeItem: async (name: string): Promise<void> => {
    await db.sessions.delete(name);
  },
};
