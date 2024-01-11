import {
  GridColDef,
  GridRowsProp,
  GridRowModel,
  GridRowId,
} from "@mui/x-data-grid";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  randomCreatedDate,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import { DateTime, Interval } from "luxon";
import { PantryState } from "../../consts/interfaces/reduxInterfaces";
import { getPantryData, getAutocompleteData } from "../thunks/pantryThunk";

const rows: GridRowsProp = [
  {
    id: 0,
    name: "Olive Oil",
    location: "Counter",
    purchasedOn: String(new Date("09/07/23")),
    expiresOn: String(new Date("09/08/23")),
  },
  {
    id: 1,
    name: "Bread",
    location: "Freezer",
    purchasedOn: String(new Date("09/07/23")),
    expiresOn: String(new Date("12/25/23")),
  },
  {
    id: 2,
    name: "Avocado",
    location: "Counter",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 3,
    name: "Eggs",
    location: "Fridge",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 4,
    name: "Mixed Greens",
    location: "Fridge",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 5,
    name: "Salt",
    location: "Fridge",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
    daysInPantry: Math.floor(
      Interval.fromDateTimes(
        DateTime.fromJSDate(randomCreatedDate()),
        DateTime.now()
      ).length("days")
    ),
  },
  {
    id: 6,
    name: "Lemon",
    location: "Fridge",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 7,
    name: "Rapini",
    location: "Fridge",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 8,
    name: "Chuck Roast",
    location: "Fridge",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 9,
    name: "Chicken",
    location: "Fridge",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 11,
    name: "Pepper",
    location: "Counter",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 12,
    name: "Butter",
    location: "Counter",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 13,
    name: "Cheddar",
    location: "Fridge",
    purchasedOn: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
  {
    id: 14,
    name: "Mozarella",
    location: "Fridge",
    purchased: String(randomCreatedDate()),
    expiresOn: String(randomUpdatedDate()),
  },
];

const initialState: PantryState = {
  isLoading: false,
  ingredientRows: rows,
  autocompleteData: [],
  commonIngredients: ["Salt", "Pepper", "Butter", "Olive Oil"],
};

const pantrySlice = createSlice({
  name: "pantry",
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<GridRowModel>) => {
      return {
        ...state,
        ingredientRows: [action.payload, ...state.ingredientRows],
      };
    },
    removeRow: (state, action: PayloadAction<GridRowId>) => {
      return {
        ...state,
        ingredientRows: state.ingredientRows.filter(
          (row) => row.id !== action.payload
        ),
      };
    },
    editRow: (state, action: PayloadAction<GridRowModel>) => {
      return {
        ...state,
        ingredientRows: state.ingredientRows.map((row) =>
          row.id === action.payload.id ? action.payload : row
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPantryData.pending, (state) => {
      console.log("loading");
      state.isLoading = true;
    });
    builder.addCase(getPantryData.fulfilled, (state, action) => {
      console.log("autocomplete", action.payload);
      if (Array.isArray(action.payload)) {
        state.ingredientRows = action.payload;
      }
      state.isLoading = false;
    });
    builder.addCase(getPantryData.rejected, (state, action) => {
      console.log("action", action);
      state.isLoading = false;
      // state.error = action.error.message;
    });
    builder.addCase(getAutocompleteData.fulfilled, (state, action) => {
      state.autocompleteData = action.payload;
      
    });
  },
});
export const { addRow, removeRow, editRow } = pantrySlice.actions;
export default pantrySlice.reducer;
