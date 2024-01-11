import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { GridRowsProp } from "@mui/x-data-grid";

export const getPantryData = createAsyncThunk("fetchPantry", async () => {
  try {
    const response: Response = await fetch(
      "https://localhost:3333/autocomplete/all"
    );
    const pantryData: GridRowsProp = await response.json();
    console.log(pantryData, "pantry");
    return pantryData;
  } catch (error) {
    console.log("no dice");
    // console.log(error);
    return isRejectedWithValue(error);
  }
});

export const getAutocompleteData = createAsyncThunk(
  "fetchAutocomplete",
  async () => {
    try {
      const response: Response = await fetch(
        "http://localhost:3333/autocomplete/all"
      );
      const data: any = await response.json();
      console.log("heres the data", data);
      return data;
    } catch (error) {
      console.log("no dice");
      // console.log(error);
      return isRejectedWithValue(error);
    }
  }
);
