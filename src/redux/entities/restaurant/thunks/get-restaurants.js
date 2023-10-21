import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";
import { SERVER_URL } from "../../../constants/endpoints";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async () => {
    const response = fetch(`${SERVER_URL}/api/restaurants/`);
    return (await response).json();
  },
  {
  condition: (_, { getState }) => !selectRestaurantIds(getState())?.length,
  }
);