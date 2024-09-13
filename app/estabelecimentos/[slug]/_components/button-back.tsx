"use client";

import { Button } from "@/app/_components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => router.back();
  return (
    <Button
      variant="outline"
      className="absolute left-3 top-3 rounded-xl bg-transparent/80 px-3 py-6"
      onClick={handleBackClick}
    >
      <ArrowLeft />
    </Button>
  );
}
