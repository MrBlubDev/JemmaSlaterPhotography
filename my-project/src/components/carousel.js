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
        interval: 3000,
        pauseOnHover: true,
        type: "loop",
        preloadPages: true,
        arrows: false,
        autoplay: true,
        flickPower: 25,
        gap: 0,
      }}
    >
      <SplideSlide>
        <Image src="/william.jpg" alt="Image 1" width={600} height={600} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/blossom.jpg" alt="Image 2" width={600} height={600} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/oliver.jpg" alt="Image 3" width={600} height={600} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/twins.jpg" alt="Image 4" width={600} height={600} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/arla.jpg" alt="Image 5" width={600} height={600} />
      </SplideSlide>
      <SplideSlide>
        <Image src="/Leo.jpg" alt="Image 6" width={600} height={600} />
      </SplideSlide>
    </Splide>
  );
}
