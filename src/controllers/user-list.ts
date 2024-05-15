import { Request, Response } from 'express';
import { getAllUsers } from '../services/user-service';

export const list = async (req: Request, res: Response) => {
  let users = await getAllUsers();

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