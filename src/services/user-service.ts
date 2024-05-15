import { encryptPassword } from '../helpers/bcrypt-password'
import { db } from '../libs/prisma'

export const createUser = async (email: string, password: string) => {
  const hasUser = await db.user.findUnique({
    where: {
      email
    }
  })

  if (hasUser) {
    throw new Error('Usuario já existe ou o email já está sendo usado')
  }

  return await db.user.create({
    data: {
      email,
      password: encryptPassword(password, 10)
    }
  })
}

export const getUserByEmail = async (email: string) => {
  return await db.user.findUnique({
    where: {
      email
    }
  })
}

export const getAllUsers = async () => {
  return await db.user.findMany()
}