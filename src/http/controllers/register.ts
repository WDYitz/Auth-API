import { UsersPrismaRepository } from '@/repositories/prisma/users-prisma-repository';
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error';
import { RegisterUseCase } from '@/use-cases/register-user-use-case';
import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const usersPrismaRepository = new UsersPrismaRepository();
      const registerUseCase = new RegisterUseCase(usersPrismaRepository);

      const newUser = await registerUseCase.execute({ email, password });

      return res.json(newUser);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return res.status(409).json({ error: error.message })
      }
      return res.json({ error: 'Erro ao registrar usuário' })
    }
  }
  return res.json({ error: 'E-mail e senha são obrigatórios' })
}