import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FocusedStatusBar from "../../components/layout/FocusedStatusBar";

export default function ShareScreen() {
  return (
    <View style={styles.container}>
      <FocusedStatusBar />
      <Text style={styles.title}>分享</Text>
      <Text style={styles.subtitle}>Share Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#999",
  },
});
