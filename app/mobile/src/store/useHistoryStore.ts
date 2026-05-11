import { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@history";
const MAX_ITEMS = 50;

export type HistoryItem = {
  id: string;
  name: string;
  creator: string;
  price: number;
  image: any;
  description: string;
  bids: any[];
  viewedAt: number;
};

let items: HistoryItem[] = [];
let loaded = false;
const listeners = new Set<() => void>();

function notify() {
  for (const cb of listeners) cb();
}

async function persist() {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

export function useHistoryStore() {
  const [snapshot, setSnapshot] = useState(items);

  useEffect(() => {
    const cb = () => setSnapshot([...items]);
    listeners.add(cb);
    if (!loaded) {
      loaded = true;
      AsyncStorage.getItem(STORAGE_KEY)
        .then((raw) => {
          if (raw) items = JSON.parse(raw);
          notify();
        })
        .catch(() => {});
    }
    return () => {
      listeners.delete(cb);
    };
  }, []);

  return useMemo(
    () => ({
      history: snapshot,
      addToHistory: (item: Omit<HistoryItem, "viewedAt">) => {
        items = items.filter((x) => x.id !== item.id);
        items = [{ ...item, viewedAt: Date.now() }, ...items];
        if (items.length > MAX_ITEMS) items = items.slice(0, MAX_ITEMS);
        notify();
        persist();
      },
      removeFromHistory: (id: string) => {
        items = items.filter((x) => x.id !== id);
        notify();
        persist();
      },
      clearHistory: () => {
        items = [];
        notify();
        persist();
      },
    }),
    [snapshot],
  );
}
