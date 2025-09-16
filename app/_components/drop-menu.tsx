import { ChevronDownIcon, ListTodo, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";

export default function DropMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="flex items-center gap-2 rounded-full"
        >
          Explorar
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            href="/categorias"
            className="flex items-center justify-between gap-4"
          >
            <ListTodo size={17} className="opacity-60" aria-hidden="true" />
            Categorias
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/todos-estabelecimentos"
            className="flex items-center gap-4"
          >
            <Store size={17} className="opacity-60" aria-hidden="true" />
            Estabelecimentos
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
