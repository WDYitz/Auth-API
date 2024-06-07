import { Request, Response } from 'express';
import { UsersPrismaRepository } from '../repositories/prisma/users-prisma-repository';
import { UsersNotFound } from '../use-cases/errors/users-not-found';
import { UserListUseCase } from '../use-cases/user-list-use-case';

export const listAllUsers = async (_req: Request, res: Response) => {
  try {
    const usersRepository = new UsersPrismaRepository();
    const userListUseCase = new UserListUseCase(usersRepository);

    const { users } = await userListUseCase.execute();

    return res.status(200).json({ users });

  } catch (error) {
    if (error instanceof UsersNotFound) {
      return res.status(404).json({ message: error.message })
    }
  }
  return res.status(404).json({ message: 'Nenhum usuario encontrado' });
}