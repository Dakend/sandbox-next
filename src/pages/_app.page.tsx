import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import React, { memo } from "react";
import { Layout } from "src/components/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default memo(App);
