import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

export default function Carousel() {
  return (
    <Splide
      options={{
        rewind: true,
        rewindByDrag: true,
        perPage: 3,
        snap: true,
        drag: "free",
        interval: 1000,
        pauseOnHover: true,
        type: "loop",
        preloadPages: true,
        arrows: false,
      }}
    >
      <SplideSlide>
        <Image src="/william.jpg" alt="Image 1" width={500} height={500} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/blossom.jpg" alt="Image 2" width={500} height={500} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/oliver.jpg" alt="Image 3" width={500} height={500} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/twins.jpg" alt="Image 4" width={500} height={500} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/arla.jpg" alt="Image 5" width={500} height={500} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/Leo.jpg" alt="Image 6" width={500} height={500} />
      </SplideSlide>
    </Splide>
  );
}
