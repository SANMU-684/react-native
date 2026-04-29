import { useCallback, useState } from "react";

export function useExplore() {
  const [isExploring, setIsExploring] = useState(false);

  const explore = useCallback(async () => {
    setIsExploring(true);
    try {
      return { items: [] as any[] };
    } finally {
      setIsExploring(false);
    }
  }, []);

  return { isExploring, explore };
}
