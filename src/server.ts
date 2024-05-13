import cors from 'cors';
import 'dotenv/config';
import express, { urlencoded } from 'express';
import helmet from 'helmet';
import { router } from './routes/main';

// Create a new express application
const server = express();

server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.disable('x-powered-by');
server.use(express.json());

// Add the router to the server
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
})