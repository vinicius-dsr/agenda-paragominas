import { BoxIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "../_lib/utils";
import DropMenu from "./drop-menu";
import { buttonVariants } from "./ui/button";

export default function NavMenu() {
  return (
    <div className="flex gap-2">
      <DropMenu />
      <Link
        href="/sugestoes"
        className={cn(
          buttonVariants({ size: "lg" }),
          "flex items-center gap-2 rounded-full",
        )}
      >
        Caixa de sugestões
        <BoxIcon size={17} />
      </Link>
    </div>
  );
}
