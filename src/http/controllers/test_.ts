import { Request, Response } from 'express';

// Check if the server is running - DEVELOPMENT ONLY

export const test = (_req: Request, res: Response) => {
  return res.json({ Running: true });
}
