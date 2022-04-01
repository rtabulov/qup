/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `FileMeta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FileMeta_name_key" ON "FileMeta"("name");
