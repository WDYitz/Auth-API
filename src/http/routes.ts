import { Router } from 'express';

import { login } from './controllers/login';
import { test } from './controllers/ping';
import { register } from './controllers/register';
import { listAllUsers } from './controllers/user-list';

import { Auth } from '../middlewares/auth';

export const router = Router();

router.get('/test', Auth.private, test);

router.get('/login', Auth.private, login);
router.post('/register', Auth.private, register);
router.get('/list', Auth.private, listAllUsers);
