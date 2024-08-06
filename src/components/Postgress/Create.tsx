import { Button, Form, Tab, Tabs } from "react-bootstrap";
import "./styles.scss";
import { useState } from "react";
import Divider from "../../common/components/Divider";
import FormGroup from "./FormGroup";
import { Slider } from "@mui/material";
import FormRow from "./FormRow";

const Create = () => {
  const initialData = {
    status: "",
    description: "",
    serverName: "",
    adminUser: "",
    password: "",
    version: "16",
    environment: "Sandbox",
    sizeDisk: 2,
    storageType: "HDD",
    sizeCPU: 100,
    sizeMemory: 200,
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
                  options={["Sandbox", "Development", "Production"]}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  errorMessage="Please enter server name."
                  required
                />
                <FormGroup
                  label="Admin username*"
                  value={data.adminUser}
                  placeholder="Enter admin username"
                  type="text"
                  name="adminUser"
                  onChange={handleChange}
                  errorMessage="Please enter admin username."
                  required
                />
                <FormGroup
                  label="Password*"
                  value={data.password}
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  errorMessage="Please enter password."
                  required
                />
                <FormGroup
                  label="version*"
                  value={data.version}
                  isSelect
                  name="version"
                  onChange={handleChange}
                  options={["16", "15", "14", "13", "12"]}
                  errorMessage="Please choose a version."
                />
              </div>
              <div className="form-section">
                <h5>Size </h5>
                <Divider />
                <FormRow label="CPU">
                  <Slider
                    defaultValue={70}
                    valueLabelDisplay="auto"
                    name="sizeCPU"
                    value={data.sizeCPU}
                    onChange={(e, value) => {
                      setData({
                        ...data,
                        sizeCPU: value as number,
                      });
                    }}
                    valueLabelFormat={(value) => {
                      if (value === 1000) {
                        return `1 core`;
                      } else if (value >= 1000) {
                        return `${(value / 1000).toFixed(1)} core`;
                      }
                      return `${value}m core`;
                    }}
                    min={100}
                    max={2000}
                    step={100}
                  />
                </FormRow>
                <FormRow label="Memory">
                  <Slider
                    defaultValue={70}
                    valueLabelDisplay="auto"
                    name="sizeMemory"
                    value={data.sizeMemory}
                    onChange={(e, value) => {
                      setData({
                        ...data,
                        sizeMemory: value as number,
                      });
                    }}
                    valueLabelFormat={(value) => {
                      if (value >= 1024) {
                        return `${(value / 1024).toFixed(1)}GB`;
                      }
                      return `${value}MB`;
                    }}
                    min={200}
                    max={6000}
                    step={50}
                  />
                </FormRow>
                <FormRow label="Disk">
                  <Slider
                    defaultValue={70}
                    valueLabelDisplay="auto"
                    name="sizeDisk"
                    value={data.sizeDisk}
                    onChange={(e, value) => {
                      setData({
                        ...data,
                        sizeDisk: value as number,
                      });
                    }}
                    valueLabelFormat={(value) => {
                      return `${value}GB`;
                    }}
                    min={2}
                    max={20}
                    step={1}
                  />
                </FormRow>
                <FormGroup
                  label="storage class*"
                  value={data.storageType}
                  isSelect
                  name="storageType"
                  onChange={handleChange}
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
