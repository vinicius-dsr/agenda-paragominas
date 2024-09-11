import Link from "next/link";
import Banner from "./_components/banner";
import CategoryList from "./_components/category-list";
import EstablishmentList from "./_components/establishment-list";
import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <>
      {/* Menu */}
      <Header />

      {/* Pesquisa */}
      <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-0">
        <Search />
      </div>

      {/* Lista de categorias */}
      <CategoryList />

      {/* banner */}
      <Banner />

      {/* Orgãos públicos */}
      <div className="mt-3 flex items-center justify-between px-4">
        <h3 className="text-lg">Órgãos públicos</h3>
        <Link
          href=""
          className="text-sm text-muted-foreground transition-all hover:text-foreground hover:underline"
        >
          Ver todos
        </Link>
      </div>
      <EstablishmentList />
    </>
  );
}
