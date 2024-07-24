-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_sectionId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "sectionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;
