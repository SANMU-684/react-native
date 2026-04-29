import { useEffect, useMemo, useState } from "react";

type Options = {
  maxEnergy?: number;
  regenIntervalMs?: number;
  regenAmount?: number;
};

export function useEnergy(initialEnergy = 0, options: Options = {}) {
  const { maxEnergy = 100, regenIntervalMs = 60_000, regenAmount = 1 } = options;
  const [energy, setEnergy] = useState(initialEnergy);

  useEffect(() => {
    const id = setInterval(() => {
      setEnergy((prev) => Math.min(maxEnergy, prev + regenAmount));
    }, regenIntervalMs);

    return () => clearInterval(id);
  }, [maxEnergy, regenAmount, regenIntervalMs]);

  return useMemo(
    () => ({
      energy,
      setEnergy,
      consume: (amount: number) => {
        setEnergy((prev) => Math.max(0, prev - amount));
      },
      refill: () => setEnergy(maxEnergy),
      maxEnergy,
    }),
    [energy, maxEnergy]
  );
}
