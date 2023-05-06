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
        <div className="jemma"></div>
      </div>
    </div>
  );
}
