import { PrismaClient } from "@prisma/client";
// Add this to PrismaClient to enable logging
// https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging
export const prisma = new PrismaClient({ log: ["query"] });
