import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_URL } from "../../../constants/endpoints";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId) => {
    const response = fetch(`${SERVER_URL}/api/reviews?restaurantId=${restaurantId}`);
    return (await response).json();
  }
);