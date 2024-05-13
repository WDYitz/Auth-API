// src/libs/prisma.ts
import { PrismaClient } from "@prisma/client";
var prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}
var db = prisma;

export {
  db
};
