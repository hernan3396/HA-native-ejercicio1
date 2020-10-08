import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Switch } from "react-native";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./assets/components/Home";
import Nav from "./assets/components/Nav";
import { Route, Router } from "react-router";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Header />
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/search" component={Main} />
        </Switch>
        <Main />
        <Footer />
        <StatusBar backgroundColor="slategray" style="auto" />
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
