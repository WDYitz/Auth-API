import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import { db } from '../libs/prisma';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email && password) {
    const hasUser = await db.user.findUnique({ where: { email } });
    if (!hasUser) {
      const newUser = await db.user.create({ data: { email, password } });

      const token = JWT.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET as string);

      return res.status(201).json({ id: newUser.id, token })
    }
    return res.json({ error: 'Este e-mail já está sendo utilizado' })
  }
  return res.json({ error: 'E-mail e senha são obrigatórios' })
}