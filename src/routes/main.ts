import { Router } from 'express';

import { login } from '../controllers/login';
import { ping } from '../controllers/ping';
import { register } from '../controllers/register';
import { list } from '../controllers/user-list';

import { Auth } from '../middlewares/auth';

export const router = Router();

router.get('/ping', ping);
router.get('/list', Auth.private, list);
router.get('/login', login);
router.post('/register', register);