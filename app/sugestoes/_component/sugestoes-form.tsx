"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { Button } from "@/app/_components/ui/button";

export default function SuggestionForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          number,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        toast.success("Email enviado com sucesso ! ✅");

        // Limpar os campos do formulário
        setName("");
        setNumber("");
        setMessage("");
      } else {
        toast.error("Falha ao enviar o email 😞");
      }
    } catch (error: any) {
      toast.error("Falha ao enviar o email 😞");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mx-auto flex w-full flex-col gap-4">
      <form
        action="POST"
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-2"
      >
        {/* Nome */}
        <label htmlFor="name">
          <p className="text-sm">Nome (opcional)</p>
        </label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className="rounded-xl bg-accent py-6"
          placeholder="Digite aqui seu nome"
        />

        <label htmlFor="number">
          <p className="text-sm">Contato (opcional)</p>
        </label>
        <Input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          id="number"
          className="rounded-xl bg-accent py-6"
          placeholder="Digite aqui um número para contato"
        />

        <label htmlFor="message" className="flex gap-2">
          <p className="text-sm">Sugestão</p>
          <span className="text-red-500">*</span>
        </label>
        <Textarea
          required
          value={message}
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite aqui sua sugestão..."
          className="rounded-xl bg-accent"
        />

        {!isLoading && (
          <Button
            type="submit"
            size="lg"
            className="mt-5 rounded-full py-6 text-base"
          >
            Enviar
          </Button>
        )}
        {isLoading && (
          <Button
            disabled
            size="lg"
            className="mt-5 rounded-full py-6 text-base"
          >
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </Button>
        )}
      </form>
    </div>
  );
}
