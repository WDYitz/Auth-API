import 'dotenv/config';
import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import { db } from '../libs/prisma';

export const login = async (req: Request, res: Response) => {
  let { email, password } = req.body;
  if (email && password) {
    let user = await db.user.findUnique({ where: { email, password } });

    if (user) {
      let token = JWT.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string);

      return res.json({
        status: true, token
      });
    }
    return res.json({ message: 'E-mail ou senha inválidos', status: false })
  }
  return res.json({ message: 'E-mail e senha são obrigatórios', status: false })
}