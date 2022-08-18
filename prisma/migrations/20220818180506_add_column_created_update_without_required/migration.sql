-- CreateTable
CREATE TABLE "Files" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Files_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "provider" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME,
    "updated_at" DATETIME
);
INSERT INTO "new_User" ("created_at", "email", "id", "name", "password_hash", "provider", "updated_at") SELECT "created_at", "email", "id", "name", "password_hash", "provider", "updated_at" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Files_userId_key" ON "Files"("userId");
