import { createSlice } from "@reduxjs/toolkit";


export const filtersSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setStatusFilter:(_, action) => {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

