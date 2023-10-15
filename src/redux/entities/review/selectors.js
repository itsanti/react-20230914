const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, id) => selectReviewModule(state).entities[id];

export const selectReviews = (state) => selectReviewModule(state).entities;

export const selectReviewsIds = (state) => selectReviewModule(state).ids;