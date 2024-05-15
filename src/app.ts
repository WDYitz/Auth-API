import cors from 'cors';
import 'dotenv/config';
import express, { urlencoded } from 'express';
import { router } from './routes/main';

// Create a new express application
const app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.disable('x-powered-by');
app.use(express.json());

// Add the router to the app
app.use(router);

export default app;