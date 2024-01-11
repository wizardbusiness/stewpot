import React, { SyntheticEvent } from "react";
import { removeRow } from "../../redux/slices/pantrySlice";
import { useAppDispatch } from "../../hooks";
import { Autocomplete } from "@mui/material";
import {
  DataGrid,
  GridRenderCellParams,
  GridPreProcessEditCellProps,
  GridRenderEditCellParams,
  GridEditInputCell,
  GridColDef,
  GridCellParams,
  GridRowId,
} from "@mui/x-data-grid";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { Box, styled } from "@mui/material";
import { DateTime } from "luxon";
import { IconButton } from "@mui/material";
import { yellow, pink, orange, green } from "@mui/material/colors";
import { DeleteOutline, Delete } from "@mui/icons-material";
import { IngredientDataGridProps } from "../../consts/interfaces/componentInterfaces";

const StyledDataGrid = styled(DataGrid)(() => ({
  "& .super-row-theme--new-rows": {
    backgroundColor: yellow[100],
    "&:hover": {
      backgroundColor: yellow[100],
    },
    "&.Mui-selected": {
      backgroundColor: yellow[200],
      "&:hover": {
        backgroundColor: yellow[200],
      },
    },
  },
  "& .super-cell-theme--expired": {
    backgroundColor: pink[100],
    "&:hover": {
      backgroundColor: pink[200],
    },
    "&:active": {
      backgroundColor: pink[200],
    },
  },
  "& .super-cell-theme--expires-today": {
    backgroundColor: orange[200],
    "&:hover": {
      backgroundColor: orange[300],
    },
    "&:active": {
      backgroundColor: orange[300],
    },
  },

  "& .super-cell-theme--not-expired": {
    backgroundColor: green[200],
    "&:hover": {
      backgroundColor: green[300],
    },
  },
}));

const StyledRejectionTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

const IngredientEditInputCell = (props: GridRenderEditCellParams) => {
  const { error } = props;
  return (
    <StyledRejectionTooltip open={!!error} title={error}>
      <span>
        <GridEditInputCell {...props} error />
      </span>
    </StyledRejectionTooltip>
  );
};

const renderEditIngredient = (params: GridRenderEditCellParams) => {
  return <IngredientEditInputCell {...params} />;
};

const IngredientDataGrid = ({
  rows,
  searchedRows,
  setSearchedRows,
  handleEditRow,
}: IngredientDataGridProps) => {
  const dispatch = useAppDispatch();

  const preProcessEditCellProps = (params: GridPreProcessEditCellProps) => {
    const validateIng = (ing: string) => {
      const ingredients = rows
        .map((row) => row.name.toLowerCase())
        .filter((name) => name !== params.row.name.toLowerCase());
      const exists = ingredients.includes(ing.toLowerCase());
      return exists ? `${ing} in pantry` : null;
    };

    const errorMessage = validateIng(params.props.value.toString());
    return { ...params.props, error: errorMessage };
  };

  const chooseCSSClasses = (name: string) => {
    let classes = "";
    if (name === "New Ingredient") classes = "super-row-theme--new-rows";
    return classes;
  };

  const handleDeleteRow = (e: SyntheticEvent, id: GridRowId) => {
    e.preventDefault();
    dispatch(removeRow(id));
    setSearchedRows(searchedRows.filter((row) => row.id !== id));
  };

  const pantryColumns: GridColDef[] = [
    ...columns,
    {
      field: "",
      disableColumnMenu: true,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <DeleteOutline />,
      renderCell: (cellParams: GridRenderCellParams) => {
        return (
          <IconButton
            aria-label="delete ingredient"
            onClick={(e) => {
              handleDeleteRow(e, cellParams.id);
            }}
          >
            <Delete style={{ color: "white" }} />
          </IconButton>
        );
      },
    },
  ];

  const editableColumns = columns.map((column) => {
    if (column.field === "name")
      return {
        ...column,
        preProcessEditCellProps,
        renderEditCell: renderEditIngredient,
      };
    else return column;
  });

  return (
    <Box sx={{ height: "60%", overflow: "hidden" }}>
      <StyledDataGrid
        // editMode='row'
        getRowClassName={(params) => chooseCSSClasses(params.row.name)}
        rows={rows}
        columns={pantryColumns}
        processRowUpdate={handleEditRow}
      />
    </Box>
  );
};

export default IngredientDataGrid;

const columns: GridColDef[] = [
  { field: "name", headerName: "Ingredient", width: 200, editable: true },
  { field: "location", headerName: "Location", width: 150, editable: true },
  {
    field: "purchasedOn",
    headerName: "Purchased On",
    width: 150,
    type: "date",
    editable: true,
  },
  {
    field: "expiresOn",
    headerName: "Expires On",
    width: 150,
    type: "date",
    editable: true,
  },
  {
    field: "daysTilExpires",
    headerName: "Expires (Days)",
    width: 130,
    type: "string",
    valueGetter: (params) => {
      const expiryDate = DateTime.fromJSDate(params.row.expiresOn);
      const currentDate = DateTime.now().endOf("day");
      const daysFromExpired: number | undefined = expiryDate
        .diff(currentDate, "days")
        .toObject().days;
      if (daysFromExpired) {
        const days = Math.floor(Math.abs(daysFromExpired));

        // console.log(daysFromExpired);
        if (days === 0) {
          return "Today";
        } else if (daysFromExpired > 0) {
          return `In ${days} Day(s)`;
        } else if (daysFromExpired < 0) {
          return `${days} Day(s) Ago`;
        }
      } else return "Not Set";
    },
    cellClassName: (params: GridCellParams) => {
      const expiryDate = DateTime.fromJSDate(params.row.expiresOn);
      const currentDate = DateTime.now().endOf("day");
      const daysFromExpired: number | undefined = expiryDate
        .diff(currentDate, "days")
        .toObject().days;
      if (!daysFromExpired) return "super-cell-theme-undefined";
      if (Math.floor(Math.abs(daysFromExpired)) === 0)
        return "super-cell-theme--expires-today";
      else if (Math.floor(daysFromExpired) < 0)
        return "super-cell-theme--expired";
      else if (daysFromExpired > 0) return "super-cell-theme--not-expired";
      return "";
    },
  },
];
