import { Router } from 'express';

import { email } from '../controllers/email-controller';
import { login } from '../controllers/login';
import { ping } from '../controllers/ping';
import { register } from '../controllers/register';
import { list } from '../controllers/user-list';

import { Auth } from '../middlewares/auth';

export const router = Router();

router.get('/ping', Auth.private, ping);
router.get('/login', Auth.private, login);
router.post('/register', Auth.private, register);
router.post('/contato', email.contato)

router.get('/list', Auth.private, list);