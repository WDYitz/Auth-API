import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users-repository";

interface UserListUseCaseResponse {
  users: User[];
}

export class UserListUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute(): Promise<UserListUseCaseResponse> {
    const users = await this.usersRepository.getAllUsers();

    if (!users) {
      throw new Error('Nenhum usuário encontrado.');
    }

    return { users }
  }
}