CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "Certificate" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,
    "issuedBy" VARCHAR NOT NULL,
    "issuedDate" TIMESTAMP(6) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "awaitingApproval" BOOLEAN NOT NULL DEFAULT true,
    "comment" VARCHAR NOT NULL DEFAULT E'',
    "teacherId" UUID,

    CONSTRAINT "PK_8daddfc65f59e341c2bbc9c9e43" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FileMeta" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "certificateId" UUID,

    CONSTRAINT "PK_62d40db2d2bbcd9bc4162a9b572" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "role" VARCHAR NOT NULL DEFAULT E'user',
    "firstName" VARCHAR NOT NULL,
    "lastName" VARCHAR NOT NULL,
    "middleName" VARCHAR NOT NULL,
    "position" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "departmentId" UUID,

    CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "role" VARCHAR NOT NULL DEFAULT E'teacher',
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
CREATE UNIQUE INDEX "UQ_471da4b90e96c1ebe0af221e07b" ON "Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_00634394dce7677d531749ed8e8" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_e12875dfb3b1d92d7d7c5377e22" ON "user"("email");

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "FK_a25be4645786e29b64aed7df7c9" FOREIGN KEY ("teacherId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "FileMeta" ADD CONSTRAINT "FK_742be97b5dc6cfaad0aec931981" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "FK_2a1ede65e872f94f99b4b442c28" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "FK_3d6915a33798152a079997cad28" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
