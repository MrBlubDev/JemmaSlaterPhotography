import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="navbar">
        <div className="button-container">
          <button className="navbar-button">HOME</button>
          <button className="navbar-button">THE STUDIO</button>
          <button className="navbar-button">PHOTOSHOOTS</button>
          <button className="navbar-button">PRODUCTS</button>
        </div>
        <Image
          src="/logo.png"
          alt="Picture of the author"
          className="logo"
          width={520}
          height={520}
        />
        <div className="button-container">
          <button className="navbar-button">FAQ&apos;S</button>
          <button className="navbar-button">REVIEWS</button>
          <button className="navbar-button">BLOG</button>
          <button className="navbar-button">CONTACT</button>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
