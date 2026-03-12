import { User } from '@/types/user';
import { StateCreator } from 'zustand';

export interface AuthSlice {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
});