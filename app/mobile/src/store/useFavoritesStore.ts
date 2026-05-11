import { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@favorites";

export type FavoriteItem = {
  id: string;
  name: string;
  creator: string;
  price: number;
  image: any;
  description: string;
  bids: any[];
};

let items: FavoriteItem[] = [];
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

export function useFavoritesStore() {
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
      favorites: snapshot,
      addFavorite: (item: FavoriteItem) => {
        if (items.find((x) => x.id === item.id)) return;
        items = [item, ...items];
        notify();
        persist();
      },
      removeFavorite: (id: string) => {
        items = items.filter((x) => x.id !== id);
        notify();
        persist();
      },
      toggleFavorite: (item: FavoriteItem) => {
        if (items.find((x) => x.id === item.id)) {
          items = items.filter((x) => x.id !== item.id);
        } else {
          items = [item, ...items];
        }
        notify();
        persist();
      },
      isFavorite: (id: string) => snapshot.some((x) => x.id === id),
      clear: () => {
        items = [];
        notify();
        persist();
      },
    }),
    [snapshot],
  );
}
