import { Form } from "react-bootstrap";
import { useMemo, useState } from "react";
import ApplicationItem from "./ApplicationItem";

import "./styles.scss";
import { applicationList } from "../../data/applicationList";

const ApplicationList = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const data = applicationList;

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
      <div className="application-list-items">
        {filteredData?.map((application) => (
          <ApplicationItem key={application.Id} application={application} />
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
