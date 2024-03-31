import BookList from "@/components/BookList";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return <BookList></BookList>;
}
