// hooks/useHydration.ts
import { useState, useEffect } from 'react';
import { GlobalStore } from '@/store/store';

export function useHydration() {
  const [hydrated, setHydrated] = useState(GlobalStore.persist.hasHydrated());

  useEffect(() => {
    // If already hydrated, we don't need to do anything
    if (hydrated) return;

    // Otherwise, listen for the event
    const unsub = GlobalStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
    return unsub;
  }, [hydrated]);

  return hydrated;
}