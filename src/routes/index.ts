import { Request, Response, Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', async (req: Request, res: Response) => {
  res.status(200).send('hello');
});

export default apiRouter;
