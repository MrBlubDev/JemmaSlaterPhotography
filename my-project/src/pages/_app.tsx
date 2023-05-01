import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="navbar">
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
