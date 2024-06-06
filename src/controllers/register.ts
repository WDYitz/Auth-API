import { Request, Response } from 'express';
import { UsersPrismaRepository } from '../repositories/prisma/users-prisma-repository';
import { RegisterUseCase } from '../use-cases/register-user-use-case';

// register route - Register a new user

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email && password) {
    const usersPrismaRepository = new UsersPrismaRepository();
    const registerUseCase = new RegisterUseCase(usersPrismaRepository);

    await registerUseCase.execute({ email, password });
  }
  return res.json({ error: 'E-mail e senha são obrigatórios' })
}