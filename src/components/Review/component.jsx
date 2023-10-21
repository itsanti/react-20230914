import { UserContainer } from "../User/container";

export const Review = ({ review }) => {
  console.log(review);
  return (
    <>
      <UserContainer userId={review.userId} />: {review.text}
    </>
  );
};

