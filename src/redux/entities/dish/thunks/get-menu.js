import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_URL } from "../../../constants/endpoints";

export const getMenu = createAsyncThunk(
  "reviews/getMenu",
  async (restaurantId) => {
    const response = fetch(`${SERVER_URL}/api/dishes?restaurantId=${restaurantId}`);
    return (await response).json();
  }
);