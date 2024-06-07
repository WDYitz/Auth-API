import 'dotenv/config';
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

//  Send an verification to the user's email 
//! NOT YET IMPLEMENTED!

export const contato = async (req: Request, res: Response) => {
  // Step 1 - configure the transporter
  let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  });

  // Step 2
  let message = {
    from: req.body.from,
    to: req.body.to,
    subject: 'Verificação de e-mail',
    html: '<h1>Faça a verificação do seu E-mail!</h1> </br> <a href="http://localhost:3000/verify">Verificar</a>', // MODIFY THIS LINK WHEN DEPLOYED
    text: 'Faça a verificação do seu E-mail'
  }

  // Step 3
  let info = await transport.sendMail(message);
  res.json({ success: true })
}

export const email = {
  contato
}