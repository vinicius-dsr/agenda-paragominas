import { Category } from "@prisma/client";
import Link from "next/link";
import { cn } from "../_lib/utils";
import { buttonVariants } from "./ui/button";

interface CategoryItemProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Link
      href=""
      className={cn(buttonVariants({ variant: "secondary" }), "rounded-full")}
    >
      {category.name}
    </Link>
  );
}
