/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Equipment` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Equipment" DROP CONSTRAINT "Equipment_categoryId_fkey";

-- AlterTable
ALTER TABLE "Equipment" DROP COLUMN "categoryId";

-- DropTable
DROP TABLE "Category";

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
