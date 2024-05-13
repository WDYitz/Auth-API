import { Request, Response } from 'express';
import { db } from '../libs/prisma';

export const list = async (req: Request, res: Response) => {
  let users = await db.user.findMany();
  let list: string[] = [];

  for (let i in users) {
    list.push(users[i].email);
  }
  
  res.json({ users: list })
}