-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Establishment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "mapsUrl" TEXT[],
    "phones" TEXT[],

    CONSTRAINT "Establishment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EstablishmentCategory" (
    "establishmentId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "EstablishmentCategory_pkey" PRIMARY KEY ("establishmentId","categoryId")
);

-- CreateTable
CREATE TABLE "_EstablishmentCategories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Establishment_slug_key" ON "Establishment"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_EstablishmentCategories_AB_unique" ON "_EstablishmentCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_EstablishmentCategories_B_index" ON "_EstablishmentCategories"("B");

-- AddForeignKey
ALTER TABLE "EstablishmentCategory" ADD CONSTRAINT "EstablishmentCategory_establishmentId_fkey" FOREIGN KEY ("establishmentId") REFERENCES "Establishment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstablishmentCategory" ADD CONSTRAINT "EstablishmentCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EstablishmentCategories" ADD CONSTRAINT "_EstablishmentCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EstablishmentCategories" ADD CONSTRAINT "_EstablishmentCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Establishment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
