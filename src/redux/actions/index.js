export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const GET_DATA = "GET_DATA";

export const addToFAv = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
});

export const removeFromFAv = (index) => ({
  type: ADD_TO_FAVOURITE,
  payload: index,
});

export const getDataAction = (baseEndpoint, companyName) => {
  return async (dispatch) => {
    try {
      const res = await fetch(baseEndpoint + companyName);
      if (res.ok) {
        const { data } = await res.json();
        dispatch({
          type: GET_DATA,
          payload: data,
        });
      } else {
        alert("An error occurred during the fect");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
