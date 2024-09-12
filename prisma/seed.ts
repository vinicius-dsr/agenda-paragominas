import { PrismaClient } from "@prisma/client";

// const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Criação de categorias
  const categories = [
    {
      icon: "https://utfs.io/f/bf412656-6983-4a64-9510-b5eea24afdc4-22ox.png",
      name: "Todos",
      slug: "todos",
    },
    {
      icon: "https://utfs.io/f/9f67ea8a-7c99-4b97-b11c-baae6e7a6425-k9ls7l.png",
      name: "Eletrônicos e Celulares",
      slug: "eletronicos-e-celulares",
    },
    {
      icon: "https://utfs.io/f/c3cc72bd-bdd5-4c14-a6c0-7445dcc16530-wgvf4e.png",
      name: "Estética",
      slug: "estetica",
    },
    {
      icon: "https://utfs.io/f/75bedd9b-e381-4632-8c25-2a22e3810ae2-x9vb8h.png",
      name: "Bares e Restaurantes",
      slug: "bares-e-restaurantes",
    },
    {
      icon: "https://utfs.io/f/5be8ccdc-cf56-4d2c-8094-7f718bebdaa5-7xyhxg.png",
      name: "Vestuário",
      slug: "vestuario",
    },
    {
      icon: "https://utfs.io/f/5d30d203-41d1-4ffa-a9d4-1e4afd869241-mpmqcr.png",
      name: "Eletrodoméstico",
      slug: "eletrodomesticos",
    },
    {
      icon: "https://utfs.io/f/e28db139-68f7-4665-9122-9bd32db1d2b8-pel5rc.png",
      name: "Supermercado",
      slug: "supermercado",
    },
    {
      icon: "https://utfs.io/f/27894451-394b-48fa-a85c-b765852c47c7-1p6as2.png",
      name: "Lazer",
      slug: "lazer",
    },
    {
      icon: "https://utfs.io/f/af6619c1-c1cd-4f45-a7da-710bc5b06bfc-q2qslw.png",
      name: "Sorveteria",
      slug: "sorveteria",
    },
    {
      icon: "https://utfs.io/f/97e280c7-77f1-446e-b8f3-4ac87a76d427-b6twff.png",
      name: "Petshop",
      slug: "petshop",
    },
    {
      icon: "https://utfs.io/f/0c703394-84b2-41cb-b03d-c65db74ccd7f-x2onlt.png",
      name: "Clínicas e Hospitais",
      slug: "clinicas-e-hospitais",
    },
    {
      icon: "https://utfs.io/f/c2e4ef44-661f-4e1c-9d46-c01246664fa4-o5467g.png",
      name: "Fotografia",
      slug: "fotografia",
    },
    {
      icon: "https://utfs.io/f/07681b97-ab46-4c28-a808-6eec94424aea-4ueemn.png",
      name: "Papelaria",
      slug: "papelaria",
    },
    {
      icon: "https://utfs.io/f/61c931af-359b-4554-bffe-a23c75343e89-16s69l.png",
      name: "Assistência Técnica",
      slug: "assistencia-tecnica",
    },
    {
      icon: "https://utfs.io/f/419b8e7c-371f-4f06-bd98-4462b5d203a7-ykad51.png",
      name: "Academia",
      slug: "academia",
    },
    {
      icon: "https://utfs.io/f/357611f0-9a0b-4684-ac14-16871b38090f-5vxsjd.png",
      name: "Órgãos Públicos",
      slug: "orgaos-publicos",
    },
    {
      icon: "https://utfs.io/f/63a9863c-0ad0-4046-9a93-9c53ed18dca1-1r5gn6.png",
      name: "Ótica",
      slug: "otica",
    },
    {
      icon: "https://utfs.io/f/999919c3-654e-4c3b-b014-9479a0af05bd-pibii0.png",
      name: "Materiais de Construção",
      slug: "materiais-de-construcao",
    },
    {
      icon: "https://utfs.io/f/99122811-a228-410e-b9e3-3ec6bd6d4ad3-npdlat.png",
      name: "Provedor de Internet",
      slug: "provedor-de-internet",
    },
    {
      icon: "https://utfs.io/f/6c3ea871-ad68-49e4-b89e-cd0061a3e213-lpa9bq.png",
      name: "Floricultura",
      slug: "floricultura",
    },
    {
      icon: "https://utfs.io/f/bcf05b94-8380-40e2-b654-8bd752607243-e1d63.png",
      name: "Funilaria",
      slug: "funilaria",
    },
    {
      icon: "https://utfs.io/f/e0241ad4-cf99-4368-94ea-5b54b614c216-1eucuj.png",
      name: "Funerária",
      slug: "funeraria",
    },
    {
      icon: "https://utfs.io/f/6aee46cf-80a5-4847-9f32-47571ccc4f28-pkihv9.png",
      name: "Oficina",
      slug: "oficina",
    },
    {
      icon: "https://utfs.io/f/4f02af36-cfe4-40d1-8677-c613f6319907-26s9.png",
      name: "Distribuidora de Gás",
      slug: "distribuidora-de-gas",
    },
    {
      icon: "https://utfs.io/f/5c647297-a811-469e-ab2f-32ca119a794e-7qsyww.png",
      name: "Posto de Gasolina",
      slug: "posto-de-gasolina",
    },
    {
      icon: "https://utfs.io/f/325b8c74-3b5f-4e9b-a54e-497f8ef0d5dc-1sq40.png",
      name: "Depósito de bebidas",
      slug: "deposito-de-bebidas",
    },
    {
      icon: "https://utfs.io/f/140b828d-affa-44dd-911c-f5974a8cd1c0-1n7xro.png",
      name: "Hotéis e Motéis",
      slug: "hosteis-e-moteis",
    },
    {
      icon: "https://utfs.io/f/b41491e5-0c27-4d37-bb62-5d9b4fcdffe5-jxdkrs.png",
      name: "Recomendados",
      slug: "recomendados",
    },
    {
      icon: "https://utfs.io/f/519f49fb-318e-4253-9e36-4702f7bac346-w8j1e7.png",
      name: "Centro de Exposições",
      slug: "centro-de-exposicoes",
    },
  ];

  // Criar categorias no banco de dados
  await Promise.all(
    categories.map((category) =>
      prisma.category.upsert({
        where: { slug: category.slug },
        update: {},
        create: category,
      }),
    ),
  );

  // Criação de estabelecimentos (exemplo)
  const establishments = [
    // Hospital Municipal
    {
      name: "Hospital Municipal Paragominas",
      slug: "hospital-municipal",
      description:
        "Hospital que oferece atendimento de consultas e exames, além de maternidade.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/30209b9d-e8d1-48a3-ac96-74a020a7366c-5r0hr5.jpg",
      address: "Av. Pres. Vargas, 345 - Centro",
      mapsUrl: "https://maps.app.goo.gl/gspkU7aTwnhV9gvB7",
      phones: ["(91) 3729-3758"],
      categoriesSlugs: ["todos", "orgaos-publicos", "clinicas-e-hospitais"],
    },

    // UPA
    {
      name: "UPA 24h Paragominas",
      slug: "upa-paragominas",
      description:
        "Implantada em 25 de janeiro de 2016, a Unidade de Pronto Atendimento (UPA) de Paragominas vem sendo um dos pilares da saúde no município, trazendo cada vez mais melhorias e eficácia no atendimento de seus pacientes.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/a3bd78c3-44fa-419e-9715-21af926db282-x6dpf9.jpg",
      address: "Av. Manoel Dias Corrêa, s/n - Uraim II",
      mapsUrl: "https://maps.app.goo.gl/Vvi2H6GwRiVLeNe69",
      phones: ["(91) 3729-8058"],
      categoriesSlugs: ["todos", "orgaos-publicos", "clinicas-e-hospitais"],
    },

    // Hospital Regional Público do Leste do Pará
    {
      name: "Hospital Regional Público do Leste do Pará",
      slug: "hospital-regional",
      description:
        "O Hospital Regional Público do Leste de Paragominas o atendimento de Emergência e Ambulatorial ocorre de forma referenciada, encaminhada ao Hospital por meio da regulação Estadual, SAMU, Corpo de Bombeiro e Polícia Rodoviária, Militar ou outro processo regulatório definido pela SESPA.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/771140a2-d072-4086-b00a-b0cb93ff1d24-vst2z6.jpg",
      address: "Rua Adelaide Bernardes, S/N - Bairro Nova Conquista",
      mapsUrl: "https://maps.app.goo.gl/kg9NQd71xY1GxCXX8",
      phones: ["(91) 3739-1046"],
      categoriesSlugs: ["todos", "orgaos-publicos", "clinicas-e-hospitais"],
    },

    // HGP
    {
      name: "HGP - Hospital Geral de Paragominas",
      slug: "hospital-geral-de-paragominas",
      description:
        "Hospital Geral de Paragominas · Um hospital que dá e salva vidas! · Uma instituição multidisciplinar que oferece o mais alto nivel de atendimento médico.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/6378cbbd-c367-4dce-bf27-e6b29d2dba77-1j5d.jpeg",
      address: "R. Santa Terezinha, 304 - Centro",
      mapsUrl: "https://maps.app.goo.gl/gn9Hzz2aoJ9A1Y2E7",
      phones: ["(91) 9100-0303", "(91) 3729-3567"],
      categoriesSlugs: ["todos", "orgaos-publicos", "clinicas-e-hospitais"],
    },

    // Caps II
    {
      name: "Caps II",
      slug: "caps-2",
      description:
        "Atende prioritariamente pessoas em intenso sofrimento psíquico decorrente de problemas mentais graves e persistentes, incluindo aqueles relacionados ao uso decorrente de álcool e outras drogas, e outras situações clínicas que impossibilitem estabelecer laços sociais e realizar projetos de vida.",
      operation: "08:00 - 18:00",
      imageUrl:
        "https://utfs.io/f/f6fcaeb9-4415-4b5d-ac8b-bf50013dedff-mm9gzj.jpg",
      address: "R. Arlindo Batista, 130 - Promissão III",
      mapsUrl: "https://maps.app.goo.gl/Ktrrtp5Rkitr7xHN8",
      phones: ["(91) 98487-4984"],
      categoriesSlugs: ["orgaos-publicos"],
    },

    // Ministério Público
    {
      name: "Ministério Público",
      slug: "ministerio-publico",
      description:
        "O Ministério Público, consoante o art. 127, caput, da Constituição Federal, é instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe a defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis.",
      operation: "08h - 17h",
      imageUrl:
        "https://utfs.io/f/98ecf5c4-1080-4e9e-94f9-6e1c353de478-2oz.jpg",
      address:
        "Loteamento Módulo II - R. Antônio de Andrade Barbalho, S/N - Centro",
      mapsUrl: "https://maps.app.goo.gl/Gnu7mYPdWTBqxj277",
      phones: ["(91) 3729-1783"],
      categoriesSlugs: ["todos", "orgaos-publicos"],
    },

    // Prefeitura Municipal de Paragominas
    {
      name: "Prefeitura Municipal de Paragominas",
      slug: "prefeitura-municipal-de-paragominas",
      description:
        "Em 23 de janeiro de 1961 foi lançada a Pedra Fundamental do futuro município de Paragominas. A fundação da cidade foi diferente das fundações de outros municípios do Pará, que surgiram através da colonização portuguesa, de missões jesuítas ou de forma desordenada à sombra de algum grande projeto. Já Paragominas não, essa cidade que podemos ver hoje foi muito bem planejada pelo seu fundador, Célio Resende de Miranda.",
      operation: "08h - 17h",
      imageUrl:
        "https://utfs.io/f/f415483c-e47a-48c3-a68e-bd4285cc0704-o9to95.jpg",
      address: "Av. do Contorno, 1212 - Centro",
      mapsUrl: "https://maps.app.goo.gl/teqHHvfSo7o3d45i7",
      phones: ["(91) 3729-8038"],
      categoriesSlugs: ["todos", "orgaos-publicos"],
    },

    // Procon
    {
      name: "Procon",
      slug: "procon",
      description:
        "O Procon é um órgão público de defesa do consumidor que, entre outras funções, recebe reclamações para mediar soluções de conflitos entre consumidor, empresas e prestadores de serviços de forma extrajudicial.",
      operation: "08h - 14h",
      imageUrl:
        "https://utfs.io/f/30e1bf48-b52e-4d8f-9324-cb6a16b0b8ed-r8ngo4.jpg",
      address: "R. Manoel Barata, n°116 - Bairro Célio Mirandia",
      mapsUrl: "https://maps.app.goo.gl/vHTxxEdZQfPEhLF59",
      phones: ["(91) 3729-1324"],
      categoriesSlugs: ["todos", "orgaos-publicos"],
    },

    // Mega Gás
    {
      name: "Mega Gás",
      slug: "mega-gas",
      description:
        "Um time de especialistas preparados, o gás líder no país, a entrega mais rápida e o melhor preço da cidade. Com entrega grátis !",
      operation: "07h - 20:30h",
      imageUrl:
        "https://utfs.io/f/98024fca-79f3-4993-bc71-d5ddecf799b0-dmh8ua.jpg",
      address: "R. Caramuru, 1B - Jaderlândia",
      mapsUrl: "https://maps.app.goo.gl/gYGNP6L2iyXUi4uC8",
      phones: ["(91) 98565-7227"],
      categoriesSlugs: ["todos", "distribuidora-de-gas", "recomendados"],
    },

    // IBGE Paragominas
    {
      name: "IBGE Paragominas",
      slug: "ibge-paragominas",
      description:
        "O Instituto Brasileiro de Geografia e Estatística - IBGE se constitui no principal provedor de dados e informações do País, que atendem às necessidades dos mais diversos segmentos da sociedade civil, bem como dos órgãos das esferas governamentais federal, estadual e municipal.",
      operation: "08h - 17h",
      imageUrl:
        "https://utfs.io/f/4d7de83e-6f09-4de6-98fa-5f73647f1566-1x4tz.jpg",
      address: "R. Mal. Rondon, 100 - Bairro Célio Miranda",
      mapsUrl: "https://maps.app.goo.gl/mHFH9BSypLt7z1N58",
      phones: ["(91) 3202-5601", "(91) 3202-5602"],
      categoriesSlugs: ["todos", "orgaos-publicos"],
    },

    // Hotel Goytacá
    {
      name: "Hotel Goytacá",
      slug: "hotel-goytaca",
      description:
        "O Hotel Goytacá está localizado em Paragominas. Este hotel 3 estrelas oferece serviço de quarto e recepção 24 horas. Alguns quartos incluem varanda com vista da cidade.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/5f8388ff-b8de-4152-9cc6-3c6935d905cb-4diyd9.jpeg",
      address: "R. Santa Terezinha, 285 - Centro",
      mapsUrl: "https://maps.app.goo.gl/j29gK1KJtoD1fcja8",
      phones: ["(91) 98187-2271"],
      categoriesSlugs: ["hosteis-e-moteis"],
    },

    // Paragominas Palace Hotel
    {
      name: "Paragominas Palace Hotel",
      slug: "palace-hotel",
      description:
        "Com localização privilegiada e próximo de um dos principais cartões postais de Paragominas, o Lago Verde, o Paragominas Palace Hotel é o primeiro hotel temático da região, cujo tema é “Paragominas: um sonho que ajudamos a construir”. Primando sempre pelo conforto, bem estar e encantamento de seus clientes, o PPH está alçado hoje como um dos melhores hotéis da região.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/1a29bdda-60b5-4ad4-8420-87f7277a7adb-rg2wmn.jpg",
      address: "R. Quinze de Novembro, 83 - Centro",
      mapsUrl: "https://maps.app.goo.gl/axKzVnwoWwUuDsTSA",
      phones: ["(91) 3729-2132"],
      categoriesSlugs: ["todos", "hosteis-e-moteis"],
    },

    // Parque de Exposição de Paragominas - Amilcar Tocantins
    {
      name: "Parque de Exposição de Paragominas - Amilcar Tocantins",
      slug: "parque-de-exposicoes-amilcar-tocantis",
      description:
        "Parque de exposições conhecido por sediar uma das maiores feiras agropecurárias do norte e diversos tipos de eventos e festivais.",
      operation: "08h - 17h",
      imageUrl:
        "https://utfs.io/f/d9f828c5-df83-4f3a-a31e-49aea762607a-5znpy9.jpeg",
      address: "PA-125, S/N - CX Postal 036 - LT Módulo I - Centro",
      mapsUrl: "https://maps.app.goo.gl/8P2K78LdibwxBUaf8",
      phones: ["(91) 3729-5528"],
      categoriesSlugs: ["todos", "centro-de-exposicoes"],
    },
  ];

  // Criar estabelecimentos no banco de dados
  await Promise.all(
    establishments.map((establishment) =>
      prisma.establishment.upsert({
        where: { slug: establishment.slug },
        update: {
          description: establishment.description,
          operation: establishment.operation,
          imageUrl: establishment.imageUrl,
          address: establishment.address,
          mapsUrl: establishment.mapsUrl,
          phones: establishment.phones,
        },
        create: {
          name: establishment.name,
          slug: establishment.slug,
          description: establishment.description,
          operation: establishment.operation,
          imageUrl: establishment.imageUrl,
          address: establishment.address,
          mapsUrl: establishment.mapsUrl,
          phones: establishment.phones,
          categories: {
            connect: establishment.categoriesSlugs.map((slug) => ({
              slug: slug,
            })),
          },
        },
      }),
    ),
  );

  console.log("Seed do banco de dados realizado com sucesso!");
}

main()
  .catch((error) => {
    console.error("Erro ao realizar o seed do banco de dados:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
