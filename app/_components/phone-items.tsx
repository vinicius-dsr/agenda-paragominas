"use client";
import { Smartphone } from "lucide-react";
import { toast } from "sonner";
import copy from "clipboard-copy";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { formatPhoneNumber } from "@/helpers/phone";
import { cn } from "../_lib/utils";

interface PhoneItemsProps {
  phone: string;
}

export default function PhoneItems({ phone }: PhoneItemsProps) {
  const handlerCopyClick = async (phone: string) => {
    try {
      await copy(phone);
      toast.success("Copiado!");
    } catch (err) {
      console.error(err);
      toast.error("Erro em copiar");
    }
  };
  return (
    <div className="flex justify-between" key={phone}>
      <span className="flex items-center gap-2">
        <Smartphone />
        <p className="text-sm">{phone}</p>
      </span>
      <div className="flex items-center gap-2 py-1">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => handlerCopyClick(phone)}
          className="rounded-full"
        >
          Copiar
        </Button>
        <Link
          href={`https://wa.me/55${formatPhoneNumber(phone)}?text=Ol%C3%A1,%20vim%20pela%20Agenda%20Paragominas`}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "rounded-full",
          )}
        >
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
}
