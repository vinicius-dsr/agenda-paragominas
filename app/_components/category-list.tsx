import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { db } from "../_lib/prisma";
import { cn } from "../_lib/utils";
import CategoryItem from "./category-item";
import { buttonVariants } from "./ui/button";

export default async function CategoryList() {
  const category = await db.category.findMany({
    take: 6,
    orderBy: [
      {
        name: "asc",
      },
    ],
  });
  return (
    <>
      {category.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      <Link
        href="/categorias"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "flex items-center gap-2 rounded-full",
        )}
      >
        Todas Categorias <ArrowRight size={14} />
      </Link>
    </>
  );
}
