import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { GridRowsProp, GridRowId, GridRowModel } from "@mui/x-data-grid";
import PantrySearchBar from "../components/PantrySearchBar";
import IngredientDataGrid from "../components/common/IngredientDataGrid";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addRow, editRow } from "../redux/slices/pantrySlice";
import {
  getPantryData,
  getAutocompleteData,
} from "../redux/thunks/pantryThunk";

export default function Pantry() {
  const rowsData = useAppSelector((state) => state.pantry.ingredientRows);
  const autocompleteData = useAppSelector(
    (state) => state.pantry.autocompleteData
  );

  const [searchedRows, setSearchedRows] = useState<GridRowsProp>([]);

  const dispatch = useAppDispatch();

  const fetchAutocompleteData = useCallback(() => {
    dispatch(getAutocompleteData());
  }, [dispatch]);

  useEffect(() => {
    // convert datestrings to datetime. stored as strings in redux since date objects aren't serializable.
    const rows = [...rowsData].map((row) => {
      const purchasedDate = row.purchasedOn ? new Date(row.purchasedOn) : "";
      const expiresDate = row.expiresOn ? new Date(row.expiresOn) : "";
      const copiedRow = {
        ...row,
        purchasedOn: purchasedDate,
        expiresOn: expiresDate,
      };
      return copiedRow;
    });
    setSearchedRows(rows);
  }, [rowsData]);

  useEffect(() => {
    fetchAutocompleteData();
  }, [fetchAutocompleteData]);

  const handleAddNewRow = () => {
    const newRow: GridRowModel = {
      id: rowsData.length + 1,
      name: "New Ingredient",
      qt: "0",
      unit: "0",
      location: "Set Location",
      purchasedOn: "",
      expiresOn: "",
    };
    dispatch(addRow(newRow));
  };

  const handleEditRow = (row: GridRowModel) => {
    const purchasedDate = String(row.purchased);
    const expiresDate = String(row.expires);
    // serialize for state
    const serializableRow = {
      ...row,
      purchasedOn: purchasedDate,
      expiresOn: expiresDate,
      isNew: false,
    };
    dispatch(editRow(serializableRow));
    const updatedRow = { ...row, isNew: false };
    return updatedRow;
  };


  return (
    <>
      <Typography flexShrink={1} color="#616161" variant="h2">
        Pantry
      </Typography>
      <PantrySearchBar
        placeholderText="Search Ingredients"
        ingredients={rowsData}
        setResults={setSearchedRows}
      />
      <Button variant="contained" onClick={handleAddNewRow}>
        + Add New Ingredient
      </Button>
      <IngredientDataGrid
        rows={searchedRows}
        handleEditRow={handleEditRow}
        setSearchedRows={setSearchedRows}
        searchedRows={searchedRows}
      />
      <Outlet />
    </>
  );
}
