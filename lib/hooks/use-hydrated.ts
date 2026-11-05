"use client";

import { useEffect, useState } from "react";
import { useProgressStore } from "@/lib/store/progress-store";

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      if (!useProgressStore.persist.hasHydrated()) {
        await useProgressStore.persist.rehydrate();
      }
      if (!cancelled) setHydrated(true);
    }

    hydrate();

    const unsubscribe = useProgressStore.persist.onFinishHydration(() => {
      if (!cancelled) setHydrated(true);
    });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  return hydrated;
}
