import { useSelector } from "react-redux";
import { RestarauntTab } from "./component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return <RestarauntTab {...props} text={restaurant.name} />;
};