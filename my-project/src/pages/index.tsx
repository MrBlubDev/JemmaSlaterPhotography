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
        <div className="ab-r-sect">
          <p className="m-jem">
            MEET JEMMA, PROFESSIONAL NEWBORN AND MATERNITY PHOTOGRAPHER.
          </p>
        </div>
        <div className="jemma-container">
          <Image
            src="/Jemma.jpg"
            alt="jem"
            width={450}
            height={450}
            className="outline"
          />
        </div>
      </div>
    </div>
  );
}
