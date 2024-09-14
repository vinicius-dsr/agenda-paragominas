import { db } from "@/app/_lib/prisma";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await db.category.findMany();
  const establishments = await db.establishment.findMany();

  const staticRoutes = [
    {
      url: "https://agenda-paragominas.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: "https://agenda-paragominas.vercel.app/estabelecimentos",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: "https://agenda-paragominas.vercel.app/categorias",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://agenda-paragominas.vercel.app/sugestoes",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const dynamicRoutes = [
    ...establishments.map((establishment) => ({
      url: `https://agenda-paragominas.vercel.app/estabelecimentos/${establishment.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    })),
    ...categories.map((category) => ({
      url: `https://agenda-paragominas.vercel.app/categorias/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
