import express, { Request, Response, NextFunction } from 'express';

import favController from '../controllers/favController';

const favRouter = express.Router();

// Favorite Recipes
// ================

favRouter.route('/favorites')
  .get(favController.getFavsByAccountId, (req: Request, res: Response, next: NextFunction) => {
    res.json(res.locals.favorites)
  })
  .post(favController.addFavById, (req: Request, res: Response, next: NextFunction) => {
    res.json(res.locals.favorites)
  })
  .delete(favController.deleteFavById, (req: Request, res: Response, next: NextFunction) => {
    res.json(res.locals.favorites)
  });

export default favRouter;