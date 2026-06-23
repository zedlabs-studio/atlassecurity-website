import { PrismaClient } from '../generated/prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  // Failsafe check for your environment variable
  if (!process.env.DATABASE_URL) {
    throw new Error('CRITICAL: DATABASE_URL environment variable is missing.')
  }

  // Your original (and correct!) approach for the newest adapter version
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL,
  })
  
  return new PrismaClient({ adapter })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma