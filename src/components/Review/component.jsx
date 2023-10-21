import { UserContainer } from "../User/container";

export const Review = ({ review }) => {
  return (
    <>
      <UserContainer userId={review.userId} />: {review.text}
    </>
  );
};

