-- CreateTable
CREATE TABLE "Test2" (
    "id" SERIAL NOT NULL,
    "text" TEXT,
    "testId" INTEGER NOT NULL,

    CONSTRAINT "Test2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Test2_testId_key" ON "Test2"("testId");
