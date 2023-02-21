import GET_DATA from "../actions/index";

const initialState = {
  content: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;
