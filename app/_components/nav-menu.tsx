import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "../_lib/utils";
import { BoxIcon, ListTodo } from "lucide-react";

export default function NavMenu() {
  return (
    <div className="flex gap-2">
      <Link
        href="/categorias"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "flex items-center gap-2 rounded-full",
        )}
      >
        <ListTodo size={17} />
        Categorias
      </Link>
      <Link
        href="/sugestoes"
        className={cn(buttonVariants(), "flex items-center gap-2 rounded-full")}
      >
        <BoxIcon size={17} />
        Caixa de sugestões
      </Link>
    </div>
  );
}
