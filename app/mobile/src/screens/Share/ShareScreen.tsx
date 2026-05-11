import React from "react";
import { View, Text } from "react-native";
import FocusedStatusBar from "../../components/layout/FocusedStatusBar";
import { useAppColors } from "../../context/ThemeContext";

export default function ShareScreen() {
  const colors = useAppColors();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: "center", alignItems: "center" }}>
      <FocusedStatusBar />
      <Text style={{ fontSize: 24, fontWeight: "bold", color: colors.text, marginBottom: 8 }}>分享</Text>
      <Text style={{ fontSize: 16, color: colors.textSecondary }}>Share Screen</Text>
    </View>
  );
}
