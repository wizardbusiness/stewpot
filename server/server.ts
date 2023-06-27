import express, {
  Request,
  Response,
  NextFunction,
} from 'express';
import path from 'path';
import fs from 'fs';
import {createServer as createViteServer } from 'vite';
import pantryRoutes from './routes/rename';
import favRoutes from './routes/favorites';
import userRoutes from './routes/userRoutes';
import spoonacularRoutes from './routes/spoonacularAPI';
import {ServerError} from './types';


const createServer = async () => {
  const app = express();
  const resolve = (p) => path.resolve(__dirname, p)

  const vite = await createViteServer({
    server: { middlewareMode: true},
    appType: 'custom',
  })

app.use(vite.middlewares);

// serve static assets
app.use(express.static('./assets'));

// body parser for static files.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// db routes
app.use('/api', pantryRoutes);
app.use('/api', favRoutes);
app.use('/api/user', userRoutes);
// spoonacular routes
app.use('/api', spoonacularRoutes);

app.use('*', async (req, res) => {
  const url = req.originalUrl;

  const template = fs.readFileSync(
    resolve('./index.html'),
    'utf-8'
  );

  res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
});

app.use(
  '/',
  (err: ServerError, req: Request, res: Response, next: NextFunction) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: {err: 'An error occurred'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

return { app, vite } 

}

createServer().then(({ app }) => app.listen(3000, () => console.log('server is listening on port 3000')));