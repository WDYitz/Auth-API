import { Router } from 'express';

import { login } from './controllers/login';
import { register } from './controllers/register';
import { test } from './controllers/test_';
import { listAllUsers } from './controllers/user-list';

import { Auth } from '../middlewares/auth';

export const router = Router();

router.get('/test', Auth.private, test);

router.get('/login', Auth.private, login);
router.post('/register', Auth.private, register);
router.get('/list', Auth.private, listAllUsers);
