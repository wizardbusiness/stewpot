import { Dispatch, SetStateAction } from "react";

import { GridRowsProp, GridColDef, GridRowModel } from "@mui/x-data-grid";

// setState utility types
type SetStateBoolean = Dispatch<SetStateAction<boolean>>;

// data interfaces
export interface ingredientInterface {
  aisle?: string;
  amount?: number;
  id: number;
  image?: string;
  name: string;
  original?: string;
  originalName?: string;
  unit: string;
  unitLong?: string;
  unitShort?: string;
}

export interface recipeInterface {
  id: number;
  title: string;
  image: string;
  servings?: number;
  readyInMinutes?: number;
  license?: string;
  sourceName?: string;
  sourceUrl?: string;
  pricePersServing?: number;
  description?: string;
  cheap?: boolean;
  dairyFree?: boolean;
  glutenFree?: boolean;
  ketogenic?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
  veryHealthy?: boolean;
  veryPopular?: boolean;
  whole30?: boolean;
  weightWatcherSmarPoints?: number;
  dishTypes?: string[];
  sustainable?: boolean;
  instructions?: string[]; // string for spoonacular
  diets?: string[];
  creditsText?: string;
  usedIngredients?: ingredientInterface[];
  missedIngredients?: ingredientInterface[];
  extendedIngredients?: string[];
}

// prop interfaces
export interface addIngredientModalProps {
  rows: GridRowsProp;
  btnText: string;
  searchText: string;
  setRecipes: React.Dispatch<React.SetStateAction<recipeInterface[]>>;
}

export interface IngredientDataGridProps {
  rows: GridRowsProp;
  searchedRows: GridRowsProp;
  setSearchedRows: Dispatch<SetStateAction<GridRowsProp>>;
  handleEditRow: (row: GridRowModel) => GridRowModel;
}

export interface IngredientsAccordionProps {
  checked: string[];
  selectedRows: GridRowsProp;
  columns: GridColDef[];
  toggleAddRemoveRow?: (ingredient: string) => void;
}

export interface RecipeCardProps extends recipeInterface {
  starred: boolean;
}

// svg component prop interfaces
export interface bubbleInfoInterface {
  x: number;
  y: number;
}

export interface BubbleProps {
  animDur: number;
  animDela: number;
  offset: bubbleInfoInterface;
  classNmPop: string;
  classNmUnPop: string;
}

export interface PoppedBubbleProps extends BubbleProps {
  popped: boolean;
}

export interface UnpoppedBubbleProps extends BubbleProps {
  bubble: boolean;
  handlePopBubble: () => void;
  setBubble: SetStateBoolean;
  setPopped: SetStateBoolean;
  setCycleEnd: SetStateBoolean;
}

export interface HelperModalProps {
  open: boolean;
  textContent: string;
  saveBtnText: string;
  exitBtnText: string;
  handleCloseDialog: () => Dispatch<SetStateAction<boolean>>;
  handleCloseSettings: () => Dispatch<SetStateAction<boolean>>;
  handleSaveChanges: () => Dispatch<SetStateAction<boolean>>;
  handleDontSaveChanges: () => Dispatch<SetStateAction<boolean>>;
}
