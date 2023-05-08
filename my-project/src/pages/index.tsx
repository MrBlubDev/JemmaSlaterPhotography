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
      <div className="about">
        <div className="jemma-container">
          <Image
            src="/Jemma.jpg"
            alt="jem"
            width={400}
            height={400}
            className="outline"
          />
        </div>
      </div>
    </div>
  );
}
