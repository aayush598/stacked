"use client";

import { useEffect, useState } from "react";
import { useNotesStore } from "@/lib/store/notes-store";

export function useNotesHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      if (!useNotesStore.persist.hasHydrated()) {
        await useNotesStore.persist.rehydrate();
      }
      if (!cancelled) setHydrated(true);
    }

    hydrate();

    const unsubscribe = useNotesStore.persist.onFinishHydration(() => {
      if (!cancelled) setHydrated(true);
    });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  return hydrated;
}
