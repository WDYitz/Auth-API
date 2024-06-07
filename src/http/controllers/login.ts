import { UsersPrismaRepository } from '@/repositories/prisma/users-prisma-repository';
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error';
import { LoginUseCase } from '@/use-cases/login-use-case';
import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
  let { email, password } = req.body;

  if (email && password) {
    try {
      const usersRepository = new UsersPrismaRepository();
      const loginUseCase = new LoginUseCase(usersRepository);

      const { user, token } = await loginUseCase.execute({ email, password })

      return res.status(200).json({ email: user.email, token })
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        return res.status(401).json({ error: error.message })
      }
      return res.status(500).json({ error: 'Erro ao realizar o login do usuário.' })
    }
  }
  return res.json({ message: 'E-mail e senha são obrigatórios' })
}