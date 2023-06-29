import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { favoritesInterface } from "../../consts/dummyData"

export interface ingredientInterface {
  aisle?: string,
  amount?: number,
  id: number,
  image?: string,
  name: string,
  original?: string,
  originalName?: string,
  unit: string,
  unitLong?: string,
  unitShort?: string,
}

export interface recipeInterface {
  id: number,
  title: string,
  image: string,
  servings?: number,
  readyInMinutes?: number,
  license?: string,
  sourceName?: string,
  sourceUrl?: string,
  pricePersServing?: number,
  cheap?: boolean,
  dairyFree?: boolean,
  glutenFree?: boolean,
  ketogenic?: boolean,
  vegan?: boolean,
  vegetarian?: boolean,
  veryHealthy?: boolean,
  veryPopular?: boolean,
  whole30?: boolean,
  weightWatcherSmarPoints?: number,
  dishTypes?: string[],
  sustainable?: boolean,
  instructions?: string,
  diets?: string[],
  creditsText?: string,
  ingredients?: ingredientInterface[],
  missedIngredients?: ingredientInterface[],
}

export interface addIngredientModalProps {
  rows: GridRowsProp,
  btnText: string,
  searchText: string,
  setRecipes: React.Dispatch<React.SetStateAction<recipeInterface[]>>
}

export interface IngredientDataGridProps {
  rows: GridRowsProp,
  columns: GridColDef[]
}

export interface IngredientsAccordionProps {
  checked: string[],
  selectedRows: GridRowsProp,
  columns: GridColDef[],
  toggleAddRemoveRow?: () => void,
}
