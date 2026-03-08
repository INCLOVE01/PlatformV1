// components/providers/storeprovider.tsx
'use client'
import { createContext, useContext, ReactNode } from 'react';
import { useStore } from 'zustand';
import { GlobalStore } from '@/store/store';
import { useHydration } from '@/hooks/useHydration';

const SettingsStoreContext = createContext(GlobalStore);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const hydrated = useHydration();

  if (!hydrated) {
    return <div>Loading your profile...</div>;
  }

  return (
    <SettingsStoreContext.Provider value={GlobalStore}>
      {children}
    </SettingsStoreContext.Provider>
  );
}

export function useSettingsStore<T>(selector: (state: unknown) => T): T {
  const store = useContext(SettingsStoreContext);
  return useStore(store, selector);
}