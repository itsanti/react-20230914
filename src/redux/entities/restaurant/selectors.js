const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];

export const selectRestaurants = (state) => selectRestaurantModule(state).entities;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;