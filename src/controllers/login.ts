import { Request, Response } from 'express';
import { db } from '../libs/prisma';

export const login = async (req: Request, res: Response) => {
  let { email, password } = req.body;
  if (email && password) {
    let user = await db.user.findUnique({ where: { email, password } });

    if (user) {
      return res.json({ user, status: true });
    }
    return res.json({ message: 'E-mail ou senha inválidos', status: false })
  }
  return res.json({ message: 'E-mail e senha são obrigatórios', status: false })
}