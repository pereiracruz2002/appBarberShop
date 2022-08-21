/*
  Warnings:

  - Added the required column `name` to the `Files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Files` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Files" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "Files_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Files" ("id", "userId") SELECT "id", "userId" FROM "Files";
DROP TABLE "Files";
ALTER TABLE "new_Files" RENAME TO "Files";
CREATE UNIQUE INDEX "Files_userId_key" ON "Files"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
