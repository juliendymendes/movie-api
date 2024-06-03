/*
  Warnings:

  - The `category` column on the `Watchlist` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "WatchedMovies" ADD COLUMN     "category" INTEGER[];

-- AlterTable
ALTER TABLE "Watchlist" DROP COLUMN "category",
ADD COLUMN     "category" INTEGER[];
