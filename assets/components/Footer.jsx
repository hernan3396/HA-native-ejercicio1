import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function Footer() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  if (isLandscape) return null;

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Made with react native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 30,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "white",
  },
});
