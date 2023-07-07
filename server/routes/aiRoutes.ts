import express, {Request, Response, NextFunction} from 'express';
import aiControllers from '../controllers/aiControllers.js';

const aiRoutes = express.Router();

aiRoutes.post('/ai/recipe', aiControllers.postToRecipeGenerator, (req, res, next) => {
  res.status(200).send(res.locals.recipe)
} );

aiRoutes.post('/ai/assistant', aiControllers.postToChat, (req, res, next) => {
  res.status(200).send(res.locals.reply)
});

export default aiRoutes;