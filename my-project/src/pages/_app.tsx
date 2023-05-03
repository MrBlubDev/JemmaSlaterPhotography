import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import { relative } from "path";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
