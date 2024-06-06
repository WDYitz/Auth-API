import { User } from "@prisma/client";
import { db } from "../../libs/prisma";
import { UsersRepository } from "../users-repository";

export class UsersPrismaRepository implements UsersRepository {
  async create(email: string, password: string): Promise<User> {
    // Create a new user in the database
    return await db.user.create({
      data: {
        email,
        password
      }
    })
  }

  async getUserByEmail(email: string): Promise<User | null> {
    // Retrieve a user from the database by email
    return await db.user.findUnique({
      where: {
        email,
      },
    })
  }

  async getAllUsers(): Promise<User[] | null> {
    // Retrieve all users from the database
    return await db.user.findMany()
  }
}