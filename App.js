import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Login from "./components/Login";

const theme = createTheme({
  lightColors: {
    primary: "#0083FF",
  },
  darkColors: {
    primary: "#000",
  },
});

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Login></Login>
    </ThemeProvider>
  );
}
