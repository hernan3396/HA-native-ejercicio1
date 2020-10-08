import { gray } from "color-name";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "slategray",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
  },
});
