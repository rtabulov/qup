/*
  Warnings:

  - You are about to drop the `Teacher` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "FK_a25be4645786e29b64aed7df7c9";

-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "FK_2a1ede65e872f94f99b4b442c28";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "FK_3d6915a33798152a079997cad28";

-- DropTable
DROP TABLE "Teacher";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "Role" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "key" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "roleId" UUID NOT NULL,
    "firstName" VARCHAR NOT NULL,
    "lastName" VARCHAR NOT NULL,
    "middleName" VARCHAR NOT NULL,
    "position" VARCHAR,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "departmentId" UUID,

    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_e12875dfb3b1d92d7d7c5377e22" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "FK_a25be4645786e29b64aed7df7c9" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "FK_3d6915a33798152a079997cad28" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
