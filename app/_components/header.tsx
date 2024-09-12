import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Search from "./search";
import NavMenu from "./nav-menu";

export default function Header() {
  return (
    <Card className="w-full rounded-none border-x-0 border-t-0 py-4 md:py-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 md:gap-4 md:px-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt=""
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            className="w-[150px] md:w-[200px]"
          />
        </Link>

        <div className="hidden w-full md:inline-flex">
          <Search />
        </div>

        <div className="hidden md:inline-flex">
          <NavMenu />
        </div>

        <Button variant="outline" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </div>
    </Card>
  );
}
