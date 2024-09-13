import Header from "@/app/_components/header";
import PhoneItems from "@/app/_components/phone-items";
import { Card, CardContent } from "@/app/_components/ui/card";
import { db } from "@/app/_lib/prisma";
import { Clock, MapPin, MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface EstabelecimentoProps {
  params: {
    slug: string;
  };
}

export default async function EstabelecimentoPage({
  params,
}: EstabelecimentoProps) {
  const establishment = await db.establishment.findUnique({
    where: {
      slug: params.slug,
    },
  });
  if (!establishment) {
    return notFound();
  }

  return (
    <>
      <div className="hidden md:block lg:block">
        <Header />
      </div>
      {/* Desktop version */}
      <div className="mx-auto hidden max-w-screen-xl px-4 py-6 md:block lg:block lg:px-0">
        <div className="mx-auto flex w-full flex-col gap-6 lg:flex-row">
          <div className="flex w-full flex-col gap-4 lg:min-w-[60vw]">
            <Image
              src={establishment.imageUrl}
              alt={establishment.name}
              sizes="100%"
              width={0}
              height={0}
              quality={100}
              className="h-[400px] w-full rounded-md object-cover"
            />
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-2 py-4">
                <h3 className="text-xl">{establishment.name}</h3>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={18} /> {establishment.address}
                </span>
              </div>
              <span className="flex items-center gap-2 px-2">
                <Clock size={17} />
                {establishment.operation}
              </span>
            </div>
          </div>

          <Card className="w-full lg:min-w-[25vw]">
            <div className="relative flex h-[150px] items-center justify-center">
              <Image
                src="/map.png"
                alt=""
                fill
                sizes="100%"
                quality={100}
                className="h-[150px] w-full rounded-t-md object-cover"
              />

              <Link
                href={establishment.mapsUrl}
                target="_blank"
                className="absolute"
              >
                <Card className="h-auto max-w-[250px] rounded-2xl">
                  <div className="flex items-center gap-4 truncate px-4 py-2">
                    <MapPinned size={40} />
                    <div className="flex flex-col truncate">
                      <span className="truncate font-medium">
                        {establishment.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Ver no maps
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
            <CardContent>
              <div className="flex flex-col gap-2 py-4">
                <span className="font-medium">Sobre nós</span>
                <p className="text-sm text-muted-foreground">
                  {establishment.description}
                </p>
              </div>
              <div className="py-4">
                <span className="">Contatos</span>
                <div>
                  {establishment.phones.map((phone) => (
                    <PhoneItems key={phone} phone={phone} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
