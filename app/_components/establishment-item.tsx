import type { Establishment } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../_lib/utils";
import { buttonVariants } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface EstablishmentItemProps {
  establishment: Establishment;
  orientation?: "row" | "col";
}

export default function EstablishmentItem({
  establishment,
  orientation = "col",
}: EstablishmentItemProps) {
  const establishmentUrl = `/estabelecimentos/${establishment.slug}`;
  const isRow = orientation === "row";
  const mobileCardMaxWidth = isRow ? "max-w-[300px]" : "max-w-[500px]";

  return (
    <>
      {/* Mobile: Card inteiro é clicável */}
      <Link
        href={establishmentUrl}
        className={cn("block md:hidden", mobileCardMaxWidth)}
      >
        <Card className="w-full min-w-[300px]">
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
              <div className="inline-flex justify-center whitespace-nowrap rounded-md bg-secondary py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">
                <p>Ver local</p>
              </div>
              {/* Botão omitido no mobile */}
            </div>
          </CardContent>
        </Card>
      </Link>

      {/* Desktop: Card com botão separado */}
      <div className="hidden md:block">
        <Card className="min-w-[250px] md:min-w-[300px] md:max-w-[300px]">
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
                href={establishmentUrl}
                className={cn(buttonVariants({ variant: "secondary" }), "mt-2")}
              >
                Ver local
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
