import { Alert, Form, Spinner } from "react-bootstrap";
import ApplicationItem from "./ApplicationItem";
import "./styles.scss";
import { fetchApplications } from "../../services/application.api";
import { useQuery } from "@tanstack/react-query";
import { ApplicationType } from "./ApplicationTypes";

const ApplicationList = () => {
  const {
    data,
    isLoading: loading,
    error,
  } = useQuery<ApplicationType[]>({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });
  return (
    <div className="application-container">
      <div className="application-search">
        <Form.Control type="text" placeholder="Search" />
      </div>
      {loading ? (
        <div className="w-100 d-flex justify-content-center p-5">
          <Spinner />
        </div>
      ) : error ? (
        <Alert variant="danger">
          Error fetching applications: {error.message}
        </Alert>
      ) : (
        <div className="application-list-items">
          {data?.map((application) => (
            <ApplicationItem application={application} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
