import { Request, Response } from 'express';

// ping route - Check if the server is running

export const ping = (req: Request, res: Response) => {
  return res.json({ pong: true });
}
