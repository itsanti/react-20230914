import { User } from "../User/component";

export const Review = ({ review }) => {
  return (
    <>
      <User userId={review.userId} />: {review.text}
    </>
  );
};

