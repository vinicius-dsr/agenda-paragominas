import Image from "next/image";
import Header from "../_components/header";
import SuggestionForm from "./_component/sugestoes-form";

export default function SugestoesPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-lg px-4 pb-6 pt-2 lg:px-0 lg:py-6">
        <div className="mx-auto pb-5 lg:py-6">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:gap-8">
            <div className="flex flex-col gap-4 py-4 text-center">
              <Image
                src="/recomendacoes.png"
                alt=""
                width={0}
                height={0}
                sizes="100%"
                quality={100}
                className="h-[80px] w-full object-contain invert lg:h-[150px]"
              />
              <h2 className="text-lg font-medium lg:text-xl">
                Caixa de sugestões
              </h2>
              <span className="text-sm text-muted-foreground lg:text-base">
                Não encontrou o estabelecimento que você estava procurando,
                alguma informação errada ou tem alguma dica para melhorarmos
                nosso site ? Nos fale um pouco mais...
              </span>
            </div>
            <SuggestionForm />
          </div>
        </div>
      </div>
    </>
  );
}
