import { Alert, Form, Spinner } from "react-bootstrap";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApplicationItem from "./ApplicationItem";
import { ApplicationType } from "./ApplicationTypes";
import { fetchApplications } from "../../services/application.api";
import "./styles.scss";

const ApplicationList = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const { data, isLoading, error } = useQuery<ApplicationType[]>({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });
  const filteredData = useMemo(
    () =>
      data?.filter(
        (application) =>
          application.AppName.toLowerCase().includes(search.toLowerCase()) ||
          application.Description.toLowerCase().includes(search.toLowerCase())
      ) || [],
    [data, search]
  );
  return (
    <div className="application-container">
      <div className="application-search">
        <Form.Control
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {isLoading ? (
        <div className="w-100 d-flex justify-content-center p-5">
          <Spinner />
        </div>
      ) : error ? (
        <Alert variant="danger">
          Error fetching applications: {error.message}
        </Alert>
      ) : (
        <div className="application-list-items">
          {filteredData?.map((application) => (
            <ApplicationItem key={application.Id} application={application} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
