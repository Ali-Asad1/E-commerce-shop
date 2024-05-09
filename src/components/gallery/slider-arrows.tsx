import { ChevronRight } from "lucide-react";

const SliderArrows = () => {
  return (
    <div className="splide__arrows">
      <button className="splide__arrow splide__arrow--prev justify-center bg-black/50 transition-colors hover:bg-black/70 disabled:pointer-events-none">
        <ChevronRight size={24} color="#fff" className="!h-auto !w-auto !fill-none" />
      </button>
      <button className="splide__arrow splide__arrow--next justify-center bg-black/50 transition-colors hover:bg-black/70 disabled:pointer-events-none">
        <ChevronRight size={24} color="#fff" className="!h-auto !w-auto !fill-none" />
      </button>
    </div>
  );
};
export default SliderArrows;
