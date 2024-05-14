import 'dotenv/config';
import JWT from 'jsonwebtoken';

export const generateJWT = (data: object) => {
  return JWT.sign(data, process.env.JWT_SECRET as string);
}

export const verifyJWT = (token: string) => {
  return JWT.verify(token, process.env.JWT_SECRET as string);
}