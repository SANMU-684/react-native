import { useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

let items: CartItem[] = [];
const listeners = new Set<() => void>();

function notify() {
  for (const cb of listeners) cb();
}

export function useCartStore() {
  const [snapshot, setSnapshot] = useState(items);

  useEffect(() => {
    const cb = () => setSnapshot(items);
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  }, []);

  return useMemo(() => {
    return {
      items: snapshot,
      addItem: (item: Omit<CartItem, "quantity">, quantity = 1) => {
        const existing = items.find((x) => x.id === item.id);
        if (existing) {
          existing.quantity += quantity;
        } else {
          items = [...items, { ...item, quantity }];
        }
        notify();
      },
      removeItem: (id: string) => {
        items = items.filter((x) => x.id !== id);
        notify();
      },
      clear: () => {
        items = [];
        notify();
      },
      totalCount: snapshot.reduce((sum, x) => sum + x.quantity, 0),
      totalPrice: snapshot.reduce((sum, x) => sum + x.price * x.quantity, 0),
    };
  }, [snapshot]);
}
