import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';

export const Auth = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false;
    // Verify authentication 
    if (req.headers.authorization) {
      const [authType, token] = req.headers.authorization.split(' ');
      if (authType === 'Bearer') {
        try {
          const decodedToken = JWT.verify(token, process.env.JWT_SECRET as string);
          // Verify token
          if (decodedToken) {
            // If token is valid, set success to true
            success = true;
          }
        } catch (error) {
          console.log("JWT Error", 'Token inválido')
        }
      }
    }

    if (success) {
      return next()
    }
    return res.status(403).json({ message: 'Não autorizado', autorizado: false })
  }
}