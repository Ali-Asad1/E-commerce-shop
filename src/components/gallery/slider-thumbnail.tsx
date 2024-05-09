"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import { forwardRef } from "react";

import { ImageType } from "@/types";

interface SliderThumbnailProps {
  images: ImageType[];
}

const SliderThumbnail = forwardRef<HTMLDivElement, SliderThumbnailProps>(({ images }, ref) => {
  return (
    <Splide
      ref={ref}
      hasTrack={false}
      options={{
        type: "slide",
        isNavigation: true,
        gap: "1rem",
        arrows: false,
        pagination: false,
      }}
    >
      <SplideTrack>
        {images.map((image) => (
          <SplideSlide
            key={image.id}
            className="aspect-square max-w-32 overflow-hidden rounded-lg border-2 border-transparent bg-muted transition-colors [&.is-active]:border-primary"
          >
            <Image
              src={image.url}
              alt="Product image"
              fill
              quality={50}
              placeholder="blur"
              blurDataURL={image.url}
              className="h-full w-full object-cover"
            />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
});

SliderThumbnail.displayName = "SliderThumbnail";

export default SliderThumbnail;
