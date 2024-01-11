import express, { Request, Response, NextFunction, RequestHandler } from 'express';

import pantryController from '../controllers/pantryController';
 
const pantryRouter = express.Router();

pantryRouter.route('/pantry/rows')
  .get(pantryController.getAllPantryItems, (req: Request, res: Response, next: NextFunction) => {
    res.json(res.locals.pantry)
  })
  .post(pantryController.addPantryItem, (req: Request, res: Response, next: NextFunction) => {
      res.json(res.locals.pantry)
  })
  .put(pantryController.editPantryItem, (req: Request, res: Response, next: NextFunction) => {
      res.json(res.locals.pantry)
  })
  .delete(pantryController.deletePantryItem, (req: Request, res: Response, next: NextFunction) => {
      res.json(res.locals.pantry)
  });

export default pantryRouter;
