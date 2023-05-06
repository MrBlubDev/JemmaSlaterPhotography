import React from "react";
import ReactDOM from "react-dom";
import Carousel from "@/components/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <Image src={"/Jemma.png"} alt="jemma" width={400} height={400} />
    </div>
  );
}
