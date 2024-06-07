import { NextFunction, Request, Response } from 'express';
import { verifyJWT } from '../helpers/JWT-token';

export const Auth = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false;
    // Verify authentication 
    if (req.headers.authorization) {
      const [authType, token] = req.headers.authorization.split(' ');
      if (authType === 'Bearer') {
        try {
          const decodedToken = verifyJWT(token);
          // Verify token
          if (decodedToken) {
            // If token is valid, set success to true
            success = true;
          }
        } catch (error) {
          console.log("JWT Error", 'Token inválido', error)
        }
      }
    }

    if (success) {
      return next()
    }
    return res.status(403).json({ message: 'Não autorizado', autorizado: false })
  }
}