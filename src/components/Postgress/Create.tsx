import { Button, Form, Tab, Tabs } from "react-bootstrap";
import "./styles.scss";
import { useState } from "react";
import Divider from "../../common/components/Divider";
import FormGroup from "./FormGroup";

const Create = () => {
  const initialData = {
    status: "",
    description: "",
    serverName: "",
    adminUser: "",
    password: "",
    version: "16",
    environment: "Sandbox",
    sizeDisk: "",
    storageType: "HDD",
    sizeCPU: "",
    sizeMemory: "",
  };
  const [data, setData] = useState(initialData);
  const [key, setKey] = useState("basic");
  const [validated, setValidated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    console.log(data);
  };

  return (
    <div className="create-section">
      <h3>Create Postgress DB</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k || "basic")}
          defaultActiveKey="basic"
          className="mb-3"
        >
          <Tab eventKey="basic" title="Basic">
            <div className="tab-contents">
              <div className="form-section">
                <h5>Environment </h5>
                <Divider />
                <FormGroup
                  label="Environment*"
                  value={data.environment}
                  isSelect
                  name="environment"
                  handleChange={handleChange}
                  options={["Sandbox", "Development", "Production"]}
                  errorMessage="Please choose an environment."
                />
              </div>
              <div className="form-section">
                <h5>Server details </h5>
                <Divider />
                <FormGroup
                  label="Server name*"
                  value={data.serverName}
                  placeholder="Enter Server name"
                  type="text"
                  name="serverName"
                  handleChange={handleChange}
                  errorMessage="Please enter server name."
                  required
                />
                {/*  Admin username**/}
                <FormGroup
                  label="Admin username*"
                  value={data.adminUser}
                  placeholder="Enter admin username"
                  type="text"
                  name="adminUser"
                  handleChange={handleChange}
                  errorMessage="Please enter admin username."
                  required
                />
                {/* password */}
                <FormGroup
                  label="Password*"
                  value={data.password}
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  handleChange={handleChange}
                  errorMessage="Please enter password."
                  required
                />
                <FormGroup
                  label="version*"
                  value={data.version}
                  isSelect
                  name="version"
                  handleChange={handleChange}
                  options={["16", "15", "14", "13", "12"]}
                  errorMessage="Please choose a version."
                />
              </div>
              <div className="form-section">
                <h5>Size </h5>
                <Divider />
                <FormGroup
                  label="CPU*"
                  value={data.sizeCPU}
                  placeholder="Enter CPU"
                  type="number"
                  name="sizeCPU"
                  handleChange={handleChange}
                  errorMessage="Please enter CPU."
                  required
                />
                <FormGroup
                  label="Memory*"
                  value={data.sizeMemory}
                  placeholder="Enter memory"
                  type="number"
                  name="sizeMemory"
                  handleChange={handleChange}
                  errorMessage="Please enter memory."
                  required
                />
                <FormGroup
                  label="Disk*"
                  value={data.sizeDisk}
                  placeholder="Enter disk"
                  type="number"
                  name="sizeDisk"
                  handleChange={handleChange}
                  errorMessage="Please enter disk."
                  required
                />
                <FormGroup
                  label="storage class*"
                  value={data.storageType}
                  isSelect
                  name="storageType"
                  handleChange={handleChange}
                  options={["HDD", "SSD_standard", "SSD_premium"]}
                  errorMessage="Please choose a storage class."
                  required
                />
              </div>
            </div>
          </Tab>
          <Tab eventKey="network" title="Network">
            <div className="tab-contents">Network details.</div>
          </Tab>
        </Tabs>
        <Button variant="primary" type="submit" style={{ display: "block" }}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default Create;
