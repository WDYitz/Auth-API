import { User } from "@prisma/client";

export interface UsersRepository {
  create(email: string, password: string): Promise<User>;
  getUserByEmail(email: string): Promise<User | null>;
  getAllUsers(): Promise<User[] | null>;
}