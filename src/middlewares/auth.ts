import { NextFunction, Request, Response } from 'express'

export const Auth = {
  private: (req: Request, res: Response, next: NextFunction) => {
    let sucess = true

    if (sucess) {
      next()
    }
    res.status(403).json({ error: 'Não autorizado' })
  }
}