import express, {Request, Response} from 'express';
import ViteExpress from 'vite-express'
import pantryRoutes from './server/routes/pantryRoutes';
import favRoutes from './server/routes/favorites';
import userRoutes from './server/routes/userRoutes';
import spoonacularRoutes from './server/routes/spoonacularRoutes.js';
import aiRoutes from './server/routes/aiRoutes.js';
import {ServerError} from './server/types';

const app = express();
  // serve static assets
  app.use(express.static('./assets'));

  // body parser for static files.
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  // db routes
  // app.use('/api', pantryRoutes);
  // app.use('/api', favRoutes);
  // app.use('/api/user', userRoutes);
  // // spoonacular routes
  app.use('/api', spoonacularRoutes);
  app.use('/api', aiRoutes)

  // app.use(
  //   '/api',
  //   (err: ServerError, req: Request, res: Response) => {
  //     const defaultErr = {
  //       log: 'Express error handler caught unknown middleware error',
  //       status: 400,
  //       message: {err: 'An error occurred'},
  //     };
  //     const errorObj = Object.assign({}, defaultErr, err);
  //     console.log(errorObj.log);
  //     return res.status(errorObj.status).json(errorObj.message);
  //   }
  // );

ViteExpress.listen(app, 3000, () => console.log('listening on port 3000'));