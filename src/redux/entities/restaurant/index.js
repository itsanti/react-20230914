import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/mock-normalized";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

const { reducer } = createSlice({
  name: "restaurant",
  initialState,
});

export default reducer;