import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <Card className="w-full rounded-none border-x-0 border-t-0 py-4 md:py-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 md:px-0">
        <Link href="/">
          <Image src="/logo.png" alt="" width={150} height={150} />
        </Link>
        <Button variant="outline" className="px-3">
          <Menu />
        </Button>
      </div>
    </Card>
  );
}
