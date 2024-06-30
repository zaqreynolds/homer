-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "alert" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "inProgress" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "rest" INTEGER;
