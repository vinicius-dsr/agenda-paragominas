import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

export default async function CategoryList() {
  const category = await db.category.findMany({
    take: 5,
    orderBy: [
      {
        name: "asc",
      },
    ],
  });
  return (
    <div className="mx-auto flex items-center gap-4 overflow-auto px-4 md:hidden md:px-0 [&::-webkit-scrollbar]:hidden">
      {category.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
