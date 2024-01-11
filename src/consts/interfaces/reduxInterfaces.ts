import store from "../../redux/store";
import { GridRowsProp } from "@mui/x-data-grid";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface PantryState {
  isLoading: boolean;
  ingredientRows: GridRowsProp;
  autocompleteData: string[];
  commonIngredients: string[];
}
