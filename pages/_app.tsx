import React from "react";
import type { AppProps } from "next/app";

import "../sass/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
