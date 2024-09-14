import { db } from "../_lib/prisma";
import BannerImage from "./banner-image";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from "./core/carousel";

export default async function Banner() {
  const banner = await db.banner.findMany({});
  return (
    <div className="relative mx-auto w-full max-w-screen-xl px-4 py-3 md:py-4">
      <Carousel autoplay={true} interval={4000}>
        <CarouselContent className="">
          {banner.map((banner) => (
            <CarouselItem key={banner.id} className="py-5 md:py-2 md:pb-6">
              <BannerImage banner={banner} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation className="hidden" />
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}
