import { Request, Response } from 'express';
import { db } from '../libs/prisma';

export const list = async (req: Request, res: Response) => {
  let users = await db.user.findMany({
    select: {
      email: true,
      password: true
    }
  });

  if (users) {
    return res.json({
      users: users.map(user => {
        return {
          name: user.email,
          email: user.password
        }
      })
    })
  }

  return res.status(404).json({ message: 'Nenhum usuario encontrado' });
}