import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import apiRouter from 'src/routes';

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));

app.use(apiRouter);

export default app;
