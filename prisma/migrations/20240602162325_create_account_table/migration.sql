-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "name" CHAR(200) NOT NULL,
    "email" CHAR(100) NOT NULL,
    "password" CHAR(200) NOT NULL,
    "date_of_birth" DATE NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);
