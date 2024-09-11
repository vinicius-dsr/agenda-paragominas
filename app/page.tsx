import Banner from "./_components/banner";
import CategoryList from "./_components/category-list";
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
    </>
  );
}
