import EstablishmentItem from "@/app/_components/establishment-item";
import Header from "@/app/_components/header";
import { db } from "@/app/_lib/prisma";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CategoriaProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: CategoriaProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const category = await db.category.findUnique({
    where: {
      slug: params.slug,
    },
  });
  const previousImages = (await parent).openGraph?.images || [];
  const title = category?.name;
  const imageUrl = category?.icon;
  return {
    title: title,
    description: `Todos os estabelecimentos da categoria ${category?.name}`,
    openGraph: {
      images: [...(imageUrl ? [imageUrl] : []), ...previousImages],
    },
  };
}

export default async function CategoriaPage({
  params: { slug },
}: CategoriaProps) {
  const category = await db.category.findUnique({
    where: {
      slug,
    },
    include: {
      establishments: true,
    },
  });

  if (!category) {
    return notFound();
  }

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-0">
        <h2 className="text-lg">{category.name}</h2>

        {category.establishments.length === 0 ? (
          <div className="flex flex-col items-center gap-5 py-28 lg:py-10">
            <Image
              src="/not-found.png"
              alt="Nenhum estabelecimento encontrado"
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              className="h-[300px] w-full object-contain"
            />
            <span className="text-muted-foreground">
              Nenhum estabelecimento em &quot;{category.name}&quot;
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-4">
            {category?.establishments.map((establishment) => (
              <EstablishmentItem
                key={establishment.id}
                establishment={establishment}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
