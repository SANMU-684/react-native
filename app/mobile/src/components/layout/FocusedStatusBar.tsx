import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useAppTheme } from "../../context/ThemeContext";

const FocusedStatusBar = (props: any) => {
  const isFocused = useIsFocused();
  const { isDark } = useAppTheme();

  return isFocused ? (
    <StatusBar
      animated={true}
      barStyle={isDark ? "light-content" : "dark-content"}
      backgroundColor="transparent"
      translucent={true}
      {...props}
    />
  ) : null;
};

export default FocusedStatusBar;
