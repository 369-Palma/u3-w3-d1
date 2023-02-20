export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

/* export const GET_DATA = "GET_DATA";

export const baseEndpoint =
  "https://strive-benchmark.herokuapp.com/api/jobs?company=";

const [jobs, setJobs] = useState([]);
const params = useParams();

const getJobs = (params) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();

        dispatch({
          type: GET_DATA,
          payload: { data },
        });

        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
}; */
