import Image from "next/image";
import EstablishmentItem from "../_components/establishment-item";
import Header from "../_components/header";
import Search from "../_components/search";
import { db } from "../_lib/prisma";

interface EstabelecimentoSearchProps {
  searchParams: {
    search?: string;
  };
}

export default async function EstabelecimentoPage({
  searchParams,
}: EstabelecimentoSearchProps) {
  const establishments = await db.establishment.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  });
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 pt-4 md:hidden md:px-0">
        <Search />
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-0">
        <div className="flex flex-col gap-4">
          <h3>
            Resultados para:{" "}
            <span className="font-semibold">
              &quot;{searchParams.search}&quot;
            </span>
          </h3>

          {establishments.length === 0 ? (
            <div className="flex flex-col items-center gap-5 py-10">
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
                Nenhum resultado para &quot;{searchParams.search}&quot;
              </span>
            </div>
          ) : (
            <div className="md: grid grid-cols-1 gap-4 md:grid-cols-4">
              {establishments.map((establishment) => (
                <EstablishmentItem
                  key={establishment.id}
                  establishment={establishment}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
