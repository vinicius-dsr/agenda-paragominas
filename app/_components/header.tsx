import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./nav-menu";
import Search from "./search";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <Card className="w-full rounded-none border-x-0 border-t-0 py-4 md:py-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 md:gap-4 lg:px-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt=""
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            className="w-[120px] md:w-[150px] lg:w-[200px]"
          />
        </Link>

        <div className="hidden w-full lg:inline-flex">
          <Search />
        </div>

        <div className="hidden lg:inline-flex">
          <NavMenu />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <MobileMenu />
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
}
