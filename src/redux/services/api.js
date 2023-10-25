import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Review", "Restaurant"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
        query: () => 'users'
    }),

    getReviews: builder.query({
      query: (restaurantId) => ({
        url: `reviews`,
        params: {
            restaurantId,
        },
      }),
      providesTags: (result, _, restaurantId) =>
        (result || [])
          .map(({ id }) => ({ type: "Review", id }))
          .concat(
            { type: "Review", id: restaurantId },
            { type: "Review", id: "ALL" }
          ),
    }),

    getRestaurants: builder.query({
        query: () => 'restaurants'
    }),

    // getRestaurantsById: builder.query({
    //     query: (restaurantId) => ({
    //       url: `restaurant`,
    //       params: {
    //           restaurantId,
    //       },
    //     }),
    //     providesTags: (result, _, restaurantId) =>
    //       (result || [])
    //         .map(({ id }) => ({ type: "Restaurant", id }))
    //         .concat(
    //           { type: "Restaurant", id: restaurantId },
    //           { type: "Restaurant", id: "ALL" }
    //         ),
    // }),
  }),
});

export const {
  useGetUsersQuery,
  useGetRestaurantsQuery,
  //usegetRestaurantsByIdQuery,
  useGetReviewsQuery
} = api;