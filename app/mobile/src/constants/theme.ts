export type ThemeColors = {
  background: string;
  surface: string;
  card: string;
  inputBackground: string;
  divider: string;
  text: string;
  textInverse: string;
  textSecondary: string;
  border: string;
  tabBar: string;
  tabBarBorder: string;
  tabBarActive: string;
  tabBarInactive: string;
  statusBarStyle: "light-content" | "dark-content";
  primary: string;
  secondary: string;
  white: string;
  gray: string;
};

export const lightColors: ThemeColors = {
  background: "#FFFFFF",
  surface: "#001F2D",
  card: "#FFFFFF",
  inputBackground: "#74858C",
  divider: "#E5E5EA",
  text: "#001F2D",
  textInverse: "#FFFFFF",
  textSecondary: "#8E8E93",
  border: "#E5E5EA",
  tabBar: "#FFFFFF",
  tabBarBorder: "#E5E5EA",
  tabBarActive: "#007AFF",
  tabBarInactive: "#8E8E93",
  statusBarStyle: "dark-content",
  primary: "#001F2D",
  secondary: "#4D626C",
  white: "#FFF",
  gray: "#74858C",
};

export const darkColors: ThemeColors = {
  background: "#000000",
  surface: "#1C1C1E",
  card: "#1C1C1E",
  inputBackground: "#2C2C2E",
  divider: "#38383A",
  text: "#FFFFFF",
  textInverse: "#FFFFFF",
  textSecondary: "#8E8E93",
  border: "#38383A",
  tabBar: "#000000",
  tabBarBorder: "#38383A",
  tabBarActive: "#0A84FF",
  tabBarInactive: "#8E8E93",
  statusBarStyle: "light-content",
  primary: "#0A84FF",
  secondary: "#8E8E93",
  white: "#FFF",
  gray: "#74858C",
};

export const getColors = (mode: "light" | "dark"): ThemeColors =>
  mode === "dark" ? darkColors : lightColors;

export const COLORS = lightColors;

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
};
