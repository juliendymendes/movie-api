-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "account_id" INTEGER NOT NULL,
    "name" CHAR(100) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watchlist" (
    "movie_id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "category" CHAR(100) NOT NULL,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("movie_id","profile_id")
);

-- CreateTable
CREATE TABLE "WatchedMovies" (
    "movie_id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,

    CONSTRAINT "WatchedMovies_pkey" PRIMARY KEY ("movie_id","profile_id")
);

-- CreateIndex
CREATE INDEX "Profile_account_id_idx" ON "Profile"("account_id");

-- CreateIndex
CREATE INDEX "Watchlist_profile_id_idx" ON "Watchlist"("profile_id");

-- CreateIndex
CREATE INDEX "WatchedMovies_profile_id_idx" ON "WatchedMovies"("profile_id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedMovies" ADD CONSTRAINT "WatchedMovies_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
