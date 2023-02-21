import {
  GET_DATA,
  GET_ERROR_MESSAGE,
  GET_DATA_LOADING_ON,
  GET_DATA_LOADING_OFF,
} from "../actions";

const initialState = {
  content: [],
  hasError: false,
  isLoading: false,
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
    case GET_DATA_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default dataReducer;
