import { User } from "@prisma/client";
import { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  private users: User[] = [];

  async create(email: string, password: string) {
    const user = { email, password } as User;
    this.users.push(user);

    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null;
  }

  async getAllUsers() {
    return this.users;
  }
}