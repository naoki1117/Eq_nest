/*
  Warnings:

  - Added the required column `quantity` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equipment" ADD COLUMN     "quantity" INTEGER NOT NULL;
