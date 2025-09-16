import EstablishmentItem from "../_components/establishment-item";
import Header from "../_components/header";
import Search from "../_components/search";
import { db } from "../_lib/prisma";

export default async function AllEstablishments() {
  const establishments = await db.establishment.findMany({
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
        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-4">
          {establishments.map((establishment) => (
            <EstablishmentItem
              key={establishment.id}
              establishment={establishment}
              orientation="col"
            />
          ))}
        </div>
      </div>
    </>
  );
}
