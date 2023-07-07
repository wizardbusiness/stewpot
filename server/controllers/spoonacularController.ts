// types for express req res next
import {Request, Response, NextFunction, RequestHandler} from 'express';
import fetch from 'node-fetch';
import {filteredRecipe, filteredRecipeResponse} from '../types';

export const spoonacularController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('hi')
    res.locals.recipes = [{res: 'jello there'}];
    next();
  } catch(err) {
    console.log(err)
  }

  // const { ingredients, numRecipes , ranking, ignorePantry } = req.body;
  // get array of ingredients from frontend
  // const {ingredients}: {ingredients: string[]} = req.body;
  // // string to store ingredients in spoonacular api fetch syntax.
  // let ingredientString = '';
  // // convert ingredients array in req body into web api fetch syntax.
  // ingredients.forEach((ingredient, index) => {
  //   index !== ingredients.length - 1
  //     ? (ingredientString += `${ingredient},+`)
  //     : (ingredientString += `${ingredient}`);
  // });
  // https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}&number=${numRecipes}&ranking=${ranking}&ignorePantry=${ignorePantry}&apiKey=1cf74764dbd24013935cf83c45275579
  // https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=13f9369a3bec409ebe5f9e90ba459277
  // number=1 in api call: minimize missing ingredients.

  // fetch(
  //   `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}&number=3&ranking=2&ignorePantry=true&apiKey=13f9369a3bec409ebe5f9e90ba459277`
  // )
  //   .then((response) => response.json())
  //   .then((recipes) => {
  //     // array of all filtered recipes to be sent to frontend
  //     const filteredRecipes: (object | null)[] = [];
  //     // array of all recipe requests that need to be made
  //     const recipeRequests = [];

  //     // iterate through recipes
  //     recipes.forEach((recipe) => {
  //       // map missing ingredients into comma seperated string to be displayed on frontend.
  //       const missingIngredients: string = recipe.missedIngredients
  //         .map((ingredientObj) => ingredientObj.originalName)
  //         .join('; ');
  //       // store all ingredients, including missing ingredients into another comma seperated string to be displayed on frontend.
  //       const allIngredients: string = ingredients
  //         .concat(missingIngredients)
  //         .join('; ');
  //       // make array of recipes to be requested, passing in recipe id, missingIngredients and allIngredients
  //       recipeRequests.push(
  //         fetchRecipes(recipe.id, missingIngredients, allIngredients)
  //       );
  //     });
  //     // resolve all promises and return result.
  //     return Promise.all(recipeRequests)
  //       .then((responses) => {
  //         // after all promises from recipe fetches have fulfilled, send the result back to the client on res.locals
  //         // sending as nested array for some reason, so just send the first element (contains actual recipe list)
  //         res.locals.recipes = responses[0];
  //         return next();
  //       })
  //       .catch((err) => {
  //         console.log('recipe', err);
  //         return next(err);
  //       });
  //     // =============================================================================================================
  //     // helper function to pull recipes by id recieved on initial fetch, filter them, and add them to filteredRecipes
  //     // note: unreachable if arrow function.
  //     // =============================================================================================================
  //     function fetchRecipes(
  //       recipeId: number,
  //       missingIngredients: string,
  //       allIngredients: string
  //     ) {
  //       // fetch individual recipe by id (pulled from initial fetch)
  //       return fetch(
  //         `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=13f9369a3bec409ebe5f9e90ba459277`
  //       )
  //         .then((response) => response.json())
  //         .then((recipeInfo) => {
  //           // destructure additional needed properties from incoming response.
  //           const {
  //             id,
  //             sourceUrl,
  //             readyInMinutes,
  //             image,
  //             servings,
  //             title,
  //           }: filteredRecipe = recipeInfo;
  //           //  create recipe object to be pushed to filteredRecipes
  //           const filteredRecipe: filteredRecipeResponse = {
  //             id: id,
  //             url: sourceUrl,
  //             allIngredients: allIngredients,
  //             missingIngredients: missingIngredients,
  //             title: title,
  //             readyIn: readyInMinutes,
  //             img: image,
  //             servings: servings,
  //           };
  //           // push the full list of recipe properties to filtered recipes.
  //           filteredRecipes.push(filteredRecipe);
  //           // return out the filtered recipes.
  //           return filteredRecipes;
  //         })
  //         .catch((err) => {
  //           console.log('line 73', err);
  //           return next(err);
  //         });
  //     }
  //   });
};

// export const spoonRecipeController = (req: Request, res: Response, next: NextFunction) => {
//   console.log(res.locals)
// }
