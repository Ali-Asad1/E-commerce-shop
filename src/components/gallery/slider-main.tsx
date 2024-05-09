"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import { forwardRef } from "react";

import { ImageType } from "@/types";

import SliderArrows from "./slider-arrows";

interface SliderMainProps {
  images: ImageType[];
}

const SliderMain = forwardRef<HTMLDivElement, SliderMainProps>(({ images }, ref) => {
  return (
    <Splide
      ref={ref}
      aria-label="Product Gallery"
      hasTrack={false}
      options={{
        type: "slide",
        gap: "3rem",
        drag: false,
        perPage: 1,
        speed: 1000,
        pagination: false,
        breakpoints: {
          640: {
            drag: true,
          },
        },
      }}
    >
      <SplideTrack>
        {images.map((image) => (
          <SplideSlide key={image.id} className="aspect-[2/1.5] h-full w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src={image.url}
              alt="Product image"
              fill
              placeholder="blur"
              blurDataURL={image.url}
              className="h-full w-full object-contain"
            />
          </SplideSlide>
        ))}
      </SplideTrack>
      <SliderArrows />
    </Splide>
  );
});

SliderMain.displayName = "SliderMain";

export default SliderMain;
