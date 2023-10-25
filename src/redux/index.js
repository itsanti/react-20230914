import { configureStore } from "@reduxjs/toolkit";

import restaurant from "./entities/restaurant";
import dish from "./entities/dish";
import review from "./entities/review";
import user from "./entities/user";
import { api } from './services/api';

const store = configureStore({
  reducer: {
    restaurant,
    dish,
    review,
    user,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(api.middleware),
});

// console.log(store.getState());

export default store;