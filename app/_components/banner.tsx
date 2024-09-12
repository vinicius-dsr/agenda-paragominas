import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from "./core/carousel";

export default function Banner() {
  return (
    <div className="relative mx-auto w-full max-w-screen-xl px-4 py-3 md:py-4">
      <Carousel autoplay={true} interval={4000}>
        <CarouselContent className="">
          <CarouselItem className="py-5 md:py-2 md:pb-6">
            <Image
              src="/banner.png"
              alt="banner"
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              className="h-auto w-full rounded-md object-contain"
            />
          </CarouselItem>
          <CarouselItem className="py-5 md:py-2 md:pb-6">
            <Image
              src="/banner-1.png"
              alt="banner"
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              className="h-auto w-full rounded-md object-contain"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation className="hidden" />
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}
