import Image from "next/image";
import Link from "next/link";
import Header from "../_components/header";
import Search from "../_components/search";
import { Card, CardContent } from "../_components/ui/card";
import { db } from "../_lib/prisma";

export default async function CategoriasPage() {
  const categories = await db.category.findMany({
    where: {
      name: {
        not: "Todos",
      },
    },
    orderBy: {
      name: "asc",
    },
  });
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 pt-4 md:hidden md:px-0">
        <Search />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-0">
        <h2 className="mb-5 text-center text-xl font-medium md:text-start md:text-2xl">
          Todas Categorias
        </h2>
        <div className="md:hidden">
          <div className="flex flex-col gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/categorias/${category.slug}`}>
                <Card className="flex items-center justify-between px-8 py-4">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={0}
                    height={0}
                    sizes="100%"
                    quality={100}
                    className="max-h-[50px] w-[50px] invert"
                  />
                  <h3 className="text-md font-medium">{category.name}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden grid-cols-2 gap-4 md:grid md:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/categorias/${category.slug}`}>
              <Card className="min-h-[250px] w-full py-1 md:min-h-[300px]">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={0}
                  height={0}
                  sizes="100%"
                  quality={100}
                  className="max-h-[150px] w-full object-contain p-6 invert md:mt-3 md:max-h-[200px]"
                />
                <CardContent className="p-4">
                  <div className="flex flex-col items-center">
                    <h3 className="text-center text-lg font-medium">
                      {category.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
