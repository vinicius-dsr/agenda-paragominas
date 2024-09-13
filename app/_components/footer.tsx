import Link from "next/link";
import { Card } from "./ui/card";
import { cn } from "../_lib/utils";
import { buttonVariants } from "./ui/button";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <Card className="w-full rounded-none border-x-0 border-b-0 py-4 lg:py-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 lg:px-0">
        <Link href="" className="text-sm text-muted-foreground">
          &copy; Vinícius Reis
        </Link>
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "secondary", size: "icon" }),
            "rounded-xl",
          )}
        >
          <ArrowUp />
        </Link>
      </div>
    </Card>
  );
}
