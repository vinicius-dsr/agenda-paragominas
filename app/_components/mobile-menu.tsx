import Link from "next/link";
import { cn } from "../_lib/utils";
import { buttonVariants } from "./ui/button";
import { BoxIcon, Home, ListTodo } from "lucide-react";

export default function MobileMenu() {
  return (
    <div className="flex w-full flex-col gap-4 py-8">
      <span className="text-lg font-medium">Menu</span>
      <div className="-ml-5 flex flex-col gap-2">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex w-full items-center justify-start gap-2 text-base",
          )}
        >
          <Home size={17} /> Início
        </Link>
        <Link
          href="/categorias"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex w-full items-center justify-start gap-2 text-base",
          )}
        >
          <ListTodo size={17} /> Categorias
        </Link>
        <Link
          href="/sugestoes"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex w-full items-center justify-start gap-2 text-base",
          )}
        >
          <BoxIcon size={17} /> Caixa de sugestões
        </Link>
      </div>
    </div>
  );
}
