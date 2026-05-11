import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { type ThemeColors, getColors, lightColors } from "../constants/theme";

const STORAGE_KEY = "@theme_mode";

type ThemeContextValue = {
  colors: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  colors: lightColors,
  isDark: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored === "dark") setMode("dark");
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      AsyncStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ colors: getColors(mode), isDark: mode === "dark", toggleTheme }),
    [mode, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  return useContext(ThemeContext);
}

export function useAppColors() {
  return useAppTheme().colors;
}
