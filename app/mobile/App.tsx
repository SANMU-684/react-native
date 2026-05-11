import React from "react";
import { NavigationContainer, DefaultTheme, type Theme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigator from "./src/navigation/RootNavigator";
import { ThemeProvider, useAppTheme } from "./src/context/ThemeContext";

function ThemedNavigation() {
  const { colors, isDark } = useAppTheme();

  const navTheme: Theme = {
    ...DefaultTheme,
    dark: isDark,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
      card: colors.tabBar,
      text: colors.text,
      border: colors.border,
      primary: colors.tabBarActive,
      notification: colors.tabBarActive,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ThemedNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
