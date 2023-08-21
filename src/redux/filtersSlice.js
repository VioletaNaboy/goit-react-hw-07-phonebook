import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filter: '',
};

export const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStatusFilter:(state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

