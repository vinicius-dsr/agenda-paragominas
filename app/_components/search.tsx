import { Input } from "./ui/input";

export default function Search() {
  return (
    <div className="flex items-center gap-4">
      <Input
        placeholder="pesquisar aqui..."
        className="w-full rounded-full bg-input py-[23px]"
      />
    </div>
  );
}
