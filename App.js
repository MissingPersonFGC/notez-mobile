import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import LanguageContextProvider from "./contexts/LanguageContext";
import ComponentContainer from "./ComponentContainer";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "blue",
    accent: "green",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LanguageContextProvider>
        <ComponentContainer />
      </LanguageContextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
