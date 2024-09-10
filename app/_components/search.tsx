"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Pesquisar aqui..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-full bg-input py-[23px]"
      />
      {searchTerm && (
        <Button
          onClick={handleClear}
          variant="outline"
          className="rounded-full py-[23px]"
        >
          Cancelar
        </Button>
      )}
    </div>
  );
}
