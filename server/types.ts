// installed type definitions for express. @types/express module 
import { Request, Response, NextFunction } from 'express'
 
export type ServerError = {
    log: string,
    status: number,
    message: { err: string }
}

// might use this, lets see. 

// generic wrapper for the express Request type.
// no longer needed but leaving it in to study later
// type TypedRequest<
//   ReqBody = Record<string, unknown>,
//   QueryString = Record<string, unknown>
//   > = Request <
//     Record<string, unknown>,
//     Record<string, unknown>,
//     Partial<ReqBody>, 
//     Partial<QueryString>
//   >;

// middleware type for any middleware utilizing req res and next.
// no longer needed but leaving it in to study later.
// export type ExpressMiddleware< 
//   ReqBody = Record<string, unknown>,
//   Res = Record<string, unknown>,
//   QueryString = Record<string, unknown>
// > = (
//   req: TypedRequest<ReqBody, QueryString>, 
//   res: Response<Res>,
//   next: NextFunction
// ) => Promise<void> | void;

export type filteredRecipe = { 
  id:number, sourceUrl: string, readyInMinutes:number, image:string, servings:number, title:string 
}

export type filteredRecipeResponse = {
  id:number,
  url:string,
  allIngredients:string,
  missingIngredients:string,
  title:string,
  readyIn:number,
  img:string,
  servings:number
}