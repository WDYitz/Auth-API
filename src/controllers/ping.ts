import { Request, Response } from 'express';

// Check if the server is running - DEVELOPMENT ONLY

export const ping = (_req: Request, res: Response) => {
  return res.json({ pong: true });
}
