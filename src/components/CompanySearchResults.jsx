import { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GET_ERROR_MESSAGE } from "../redux/actions";

const CompanySearchResults = () => {
  const hasError = useSelector((state) => state.data.hasError);

  const dispatch = useDispatch();

  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        dispatch({
          type: GET_ERROR_MESSAGE,
          payload: "An error occurred during the call",
        });
        alert("Error fetching results");
      }
    } catch (error) {
      dispatch({
        type: GET_ERROR_MESSAGE,
        payload: error,
      });
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          {hasError && (
            <Alert variant="danger">
              {hasError ? hasError : "Something went wrong with the call"}
            </Alert>
          )}

          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
