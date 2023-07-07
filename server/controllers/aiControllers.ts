import {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();
const apiKey = process.env.AI_API_KEY;
const configuration = new Configuration({
  apiKey: apiKey
});
    
const ai = new OpenAIApi(configuration);

const aiControllers = {
  async postToRecipeGenerator(req: Request, res: Response, next: NextFunction) {

    const prompt = req.body.prompt || '';
    if (prompt.trim().length === 0) {
      res.locals.recipe =  { error: {
          message: "I didn't catch that",
        }
      }
      return;
    }

    const generatePrompt = (userPrompt: string) => {
      return `
        Make a recipe that only uses these ingredients, or as close to as possible: 
        Milk, Eggs, Ham, Bread, Cheese, Butter, Salt, Pepper    
        ${userPrompt}
        Make sure that the response is a JSON object which conforms to this typescript interface: 
        interface recipeInterface {
          title: string;
          image: string;
          instructions?: string[];
          missedIngredients?: ingredientInterface[];
          extendedIngredients?: string[];
        }
        Don't include any explanation in your response.
        `
    }

    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: 'OpenAI API key not found.'
        }
      })
      return;
    } 
  
    try {
      const completion = await ai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: 'user', content: generatePrompt(prompt)}],
        temperature: 0.7,
      });
      console.log(typeof completion.data.choices[0].message?.content);
      res.locals.recipe = completion.data.choices[0].message?.content;
      next();
    } catch(err: any) {
      if (err.response) {
        console.error(err.response.status, err.response.data);
        res.status(err.response.status).json(err.response.data); 
      } else {
        console.error('err with OpenAI API request: ' + err.message);
        res.status(500).json({
          error: {
            message: 'An Error occured during your request.'
          }
        })
      }
    }
  },

  async postToChat(req: Request, res: Response, next: NextFunction) {

    const ai = new OpenAIApi(configuration);

    const prompt = req.body.prompt || '';
    if (prompt.trim().length === 0) {
      res.status(400).json({
        error: {
          message: "I didn't catch that",
        }
      })
      return;
    }

    const generatePrompt = (userPrompt: string) => {
      return `
        You are a master chef, and you are the personal chef for someone who is stepping into the realm of culinary delights for the first time. 
        You are delighted to give tips and tricks when asked. You can be a bit snobbish, but all you want is for your patron to have the best. 
        However, your patron doesn't have the longest attention span, so you try to keep you answers brief. If you have more to say on a subject, 
        you'll try to contain your enthusiasm, but you'll hint that you have more to share if your patron wants to know. If your patron asks you a
        question that isn't related to cooking, you will not indulge them.
    
        ----------
    
        ${userPrompt}
      `
    }

    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: 'OpenAI API key not found.'
        }
      })
      return;
    } 
  
    try {
      const completion = await ai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: generatePrompt(prompt),
        temperature: 0.7,
      });
      res.locals.reply = completion.data.choices[0].text;
      next();
    } catch(err: any) {
      if (err.response) {
        console.error(err.response.status, err.response.data);
        res.status(err.response.status).json(err.response.data); 
      } else {
        console.error('err with OpenAI API request: ' + err.message);
        res.status(500).json({
          error: {
            message: 'An Error occured during your request.'
          }
        })
      }
    }
  }
}

export default aiControllers;