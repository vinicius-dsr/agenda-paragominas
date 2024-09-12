"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  search: z.string().trim().min(1, {
    message: "Digite algo para buscar",
  }),
});

export default function Search() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const router = useRouter();

  const handlerSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/estabelecimento?search=${data.search}`);
  };

  return (
    <div className="flex w-full gap-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handlerSubmit)}
          className="flex w-full gap-2"
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Pesquisar aqui..."
                    {...field}
                    className="w-full rounded-full bg-input py-[23px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            size="icon"
            variant="ghost"
            className="-ml-14 mt-[3.5px] rounded-full"
          >
            <SearchIcon />
          </Button>
        </form>
      </Form>
    </div>
  );
}
