import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "./thunks/get-menu";

const menuEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "menu",
  initialState: menuEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getMenu.fulfilled, (state, { payload } = {}) => {
      menuEntityAdapter.removeAll(state);
      menuEntityAdapter.setMany(state, payload);
    }),
});

export default reducer;