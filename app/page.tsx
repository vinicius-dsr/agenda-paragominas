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

      {/* banner */}
      <Banner />

      {/* Pesquisa */}
      <div className="mx-auto max-w-screen-xl px-4 pb-4 pt-2 md:hidden md:px-0">
        <Search />
      </div>

      {/* Lista de categorias */}
      <div className="mx-auto flex items-center gap-4 overflow-auto px-4 pb-4 pt-2 md:hidden md:px-0 [&::-webkit-scrollbar]:hidden">
        <CategoryList />
      </div>

      <div className="mx-auto mb-2 hidden max-w-screen-xl items-center gap-4 overflow-auto px-4 py-5 md:flex [&::-webkit-scrollbar]:hidden">
        <CategoryList />
      </div>

      {/* Recomenadados */}
      <div className="mx-auto mt-3 flex max-w-screen-xl items-center justify-between px-4">
        <h3 className="text-lg">Recomendados</h3>
        <Link
          href="/categorias/recomendados"
          className="text-sm text-muted-foreground transition-all hover:text-foreground"
        >
          Ver todos
        </Link>
      </div>
      <EstablishmentList categoryName="Recomendados" limit={6} />

      {/* Orgãos públicos */}
      <div className="mx-auto mt-3 flex max-w-screen-xl items-center justify-between px-4">
        <h3 className="text-lg">Órgãos públicos</h3>
        <Link
          href="/categorias/orgaos-publicos"
          className="text-sm text-muted-foreground transition-all hover:text-foreground"
        >
          Ver todos
        </Link>
      </div>
      <EstablishmentList categoryName="Órgãos Públicos" limit={6} />
    </>
  );
}
