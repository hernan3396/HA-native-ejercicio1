import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

export default function Nav() {
  return (
    <View style={styles.nav}>
      <Link to="/home">
        <Text>Home</Text>
      </Link>
      <Link to="/search">
        <Text>Search</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
