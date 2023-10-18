import { configureStore } from "@reduxjs/toolkit";

import restaurant from "./entities/restaurant";
import dish from "./entities/dish";
import review from "./entities/review";
import user from "./entities/user";

export const SERVER_URL = 'http://localhost:5050';

const store = configureStore({
  reducer: {
    restaurant,
    dish,
    review,
    user,
  },
});

// console.log(store.getState());
export default store;