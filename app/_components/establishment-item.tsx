import { Establishment } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../_lib/utils";
import { buttonVariants } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface EstablishmenteItemProps {
  establishment: Establishment;
}

export default function EstablishmentItem({
  establishment,
}: EstablishmenteItemProps) {
  return (
    <Card className="min-w-[250px] md:min-w-[300px]">
      <Image
        src={establishment.imageUrl}
        alt={establishment.name}
        width={0}
        height={0}
        sizes="100%"
        quality={100}
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <CardContent className="px-2 py-4">
        <div className="flex flex-col gap-4">
          <h3 className="truncate text-base font-medium">
            {establishment.name}
          </h3>
          <p className="truncate text-sm text-muted-foreground">
            {establishment.address}
          </p>
          <Link
            href={`/estabelecimentos/${establishment.slug}`}
            className={cn(buttonVariants({ variant: "secondary" }), "mt-2")}
          >
            Ver local
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
