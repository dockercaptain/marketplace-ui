import { Form } from "react-bootstrap";
import { applicationList } from "../../data/applicationList";
import ApplicationItem from "./ApplicationItem";
import { ApplicationType } from "./ApplicationTypes";
import "./styles.scss";

const ApplicationList = () => {
  const data: ApplicationType[] = applicationList;
  return (
    <div className="application-container">
      <div className="application-search">
        <Form.Control type="text" placeholder="Search" />
      </div>
      <div className="application-list-items">
        {data.map((application) => (
          <ApplicationItem application={application} />
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
