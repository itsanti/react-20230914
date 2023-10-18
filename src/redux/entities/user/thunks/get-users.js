import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_URL } from "../../..";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => {
    const response = fetch(`${SERVER_URL}/api/users/`);
    return (await response).json();
  }
);