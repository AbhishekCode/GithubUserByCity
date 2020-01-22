import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp)
