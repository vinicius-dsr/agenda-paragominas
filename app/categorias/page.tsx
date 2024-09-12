import Image from "next/image";
import Header from "../_components/header";
import { Card, CardContent } from "../_components/ui/card";
import { db } from "../_lib/prisma";
import Link from "next/link";
import Search from "../_components/search";

export default async function CategoriasPage() {
  const categories = await db.category.findMany({
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href="">
              <Card className="min-h-[250px] w-full md:min-h-[300px]">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={0}
                  height={0}
                  sizes="100%"
                  quality={100}
                  className="max-h-[150px] w-full object-contain p-6 invert md:mt-3 md:max-h-[200px]"
                />
                <CardContent className="pt-4">
                  <div className="flex flex-col items-center">
                    <h3 className="text-center text-lg font-semibold">
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
