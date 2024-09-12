import Link from "next/link";
import { db } from "../_lib/prisma";
import { cn } from "../_lib/utils";
import CategoryItem from "./category-item";
import { buttonVariants } from "./ui/button";

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
      <Link
        href="/categorias"
        className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
      >
        Ver todas
      </Link>
    </div>
  );
}
