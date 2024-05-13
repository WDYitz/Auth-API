import { Request, Response } from 'express';
import { db } from '../libs/prisma';

export const list = async (req: Request, res: Response) => {
  let users = await db.user.findMany();
  let list: string[] = [];

  users.forEach((user) => {
    list.push(user.email)
  });

  return res.json({ users: list })
}