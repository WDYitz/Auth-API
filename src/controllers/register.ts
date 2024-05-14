import { Request, Response } from 'express';
import { generateJWT } from '../helpers/JWT-token';
import { db } from '../libs/prisma';

// register route - Register a new user

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email && password) {
    const hasUser = await db.user.findUnique({ where: { email } });
    if (!hasUser) {
      const newUser = await db.user.create({ data: { email, password } });

      const token = generateJWT({ id: newUser.id, email: newUser.email });

      return res.status(201).json({ id: newUser.id, token })
    }
    return res.json({ error: 'Este e-mail já está sendo utilizado' })
  }
  return res.json({ error: 'E-mail e senha são obrigatórios' })
}