import { db } from "../_lib/prisma";
import EstablishmentItem from "./establishment-item";

interface EstablishmentListProps {
  categoryName: string;
  limit?: number;
}

export default async function EstablishmentList({
  categoryName,
  limit = 6,
}: EstablishmentListProps) {
  const establishment = await db.establishment.findMany({
    take: limit,
    where: {
      categories: {
        some: {
          name: categoryName,
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
