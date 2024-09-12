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
            <span className="text-semibold">
              &quot;{searchParams.search}&quot;
            </span>
          </h3>

          {establishments.length === 0 ? (
            <div>
              <h3>nada aqui</h3>
            </div>
          ) : (
            <div className="md: grid grid-cols-2 gap-4 md:grid-cols-4">
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
