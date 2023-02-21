import { GET_DATA, GET_ERROR_MESSAGE } from "../actions";

const initialState = {
  content: [],
  hasError: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        content: action.payload,
      };

    case GET_ERROR_MESSAGE:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;
