import { ADD_TO_FAVOURITE } from "../actions";
import { REMOVE_FROM_FAVOURITE } from "../actions";

const favourites = {
  list: [],
};

const favouritesReducer = (state = favourites, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,

        list: state.list.filter((fav) => fav !== action.payload),
      };

    default:
      return state;
  }
};

export default favouritesReducer;
