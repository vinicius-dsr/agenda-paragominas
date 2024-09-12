import React from "react";
import { db } from "../_lib/prisma";
import EstablishmentItem from "./establishment-item";

export default async function EstablishmentList() {
  const establishment = await db.establishment.findMany({
    take: 6,
    where: {
      categories: {
        some: {
          name: "Órgãos Públicos",
        },
      },
    },
  });
  return (
    <div className="mx-auto flex max-w-screen-xl gap-4 overflow-auto px-4 py-6 [&::-webkit-scrollbar]:hidden">
      {establishment.map((establishment) => (
        <EstablishmentItem
          key={establishment.id}
          establishment={establishment}
        />
      ))}
    </div>
  );
}
