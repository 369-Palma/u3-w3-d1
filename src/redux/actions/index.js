export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_DATA = "GET_DATA";
export const GET_ERROR_MESSAGE = "GET_ERROR_MESSAGE";

export const addToFav = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
});

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?sch=";

export const removeFromFav = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
});

export const getDataAction = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(baseEndpoint + query + "&limit=20");
      if (res.ok) {
        const { data } = await res.json();
        dispatch({
          type: GET_DATA,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_ERROR_MESSAGE,
          payload: "An error occurred during the call",
        });
      }
    } catch (error) {
      dispatch({
        type: GET_ERROR_MESSAGE,
        payload: error.message,
      });
    }
  };
};
