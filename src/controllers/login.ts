import { Request, Response } from 'express';
// import { getUserByEmail } from '../services/user-service';

// login route - Login the user

export const login = async (req: Request, res: Response) => {
  let { email, password } = req.body;
  if (email && password) {
   /*  let user = await getUserByEmail(email);

    if (user && await decryptPassword(password, user.password)) {
      const token = generateJWT({ id: user.id, email: user.email });

      return res.json({
        status: true, token
      });
    }
    return res.json({ message: 'E-mail ou senha inválidos', status: false }) */
  }
  return res.json({ message: 'E-mail e senha são obrigatórios', status: false })
}