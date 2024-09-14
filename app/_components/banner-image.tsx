"use client";

import { Banner } from "@prisma/client";
import Image from "next/image";

interface BannerImageProps {
  banner: Banner;
}

export default function BannerImage({ banner }: BannerImageProps) {
  return (
    <Image
      src={banner.imageUrl}
      alt={banner.name}
      width={0}
      height={0}
      sizes="100%"
      quality={100}
      className="h-auto w-full rounded-md object-contain hover:cursor-pointer"
      onClick={() => window.open(banner.href, banner.target)}
    />
  );
}
