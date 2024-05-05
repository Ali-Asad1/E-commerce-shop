"use client";

import { useEffect, useRef } from "react";

import { ImageType } from "@/types";

import SliderMain from "./slider-main";
import SliderThumbnail from "./slider-thumbnail";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const mainRef = useRef<any>(null);
  const thumbnailRef = useRef<any>(null);

  useEffect(() => {
    if (mainRef.current && thumbnailRef.current && thumbnailRef.current.splide) {
      mainRef.current.sync(thumbnailRef.current.splide);
    }
  }, []);

  return (
    <div className="space-y-4">
      <SliderMain images={images} ref={mainRef} />
      <SliderThumbnail images={images} ref={thumbnailRef} />
    </div>
  );
};
export default Gallery;
