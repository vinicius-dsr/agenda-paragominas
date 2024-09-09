import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <>
      <Header />

      <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-0">
        <Search />
      </div>
    </>
  );
}
