import "../styles/globals.css";
import "@fontsource/merriweather";
import "@fontsource/noto-sans";
import "@fontsource/fira-code";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
