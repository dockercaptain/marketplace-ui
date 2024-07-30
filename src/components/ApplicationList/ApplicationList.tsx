import { Form, Spinner } from "react-bootstrap";
import ApplicationItem from "./ApplicationItem";
import { ApplicationType } from "./ApplicationTypes";
import "./styles.scss";
import { useEffect, useState } from "react";
import { fetchApplications } from "../../services/application.api";

const ApplicationList = () => {
  const [data, setData] = useState<ApplicationType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const res = await fetchApplications();
      setData(res);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="application-container">
      <div className="application-search">
        <Form.Control type="text" placeholder="Search" />
      </div>
      {loading ? (
        <div className="w-100 d-flex justify-content-center p-5">
          <Spinner />
        </div>
      ) : (
        <div className="application-list-items">
          {data.map((application) => (
            <ApplicationItem application={application} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
