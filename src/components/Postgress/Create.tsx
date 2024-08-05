import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import "./styles.scss";
import { useState } from "react";

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
            <div className="form-section">
              <h5>Environment </h5>
              <Form.Group>
                <Form.Label>Environment*</Form.Label>
                <Form.Control
                  name="environment"
                  as="select"
                  value={data.environment}
                  onChange={handleChange}
                  required
                >
                  <option>Sandbox</option>
                  <option>Development</option>
                  <option>Production</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please choose an environment.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="form-section">
              <h5>Server details </h5>
              <Form.Group>
                <Form.Label>server name*</Form.Label>
                <Form.Control
                  name="serverName"
                  type="text"
                  placeholder="Enter Server name"
                  value={data.serverName}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter server name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Admin username*</Form.Label>
                <Form.Control
                  name="adminUser"
                  type="text"
                  placeholder="Enter admin username"
                  value={data.adminUser}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter admin username.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>password*</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>confirm password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter confirm password"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>version*</Form.Label>
                <Form.Control
                  name="version"
                  as="select"
                  value={data.version}
                  onChange={handleChange}
                  required
                >
                  <option>16</option>
                  <option>15</option>
                  <option>14</option>
                  <option>13</option>
                  <option>12</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please choose a version.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="form-section">
              <h5>Size </h5>
              <Form.Group>
                <Form.Label>cpu*</Form.Label>
                <Form.Control
                  name="sizeCPU"
                  type="number"
                  placeholder="Enter cpu"
                  value={data.sizeCPU}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter cpu.
                </Form.Control.Feedback>
              </Form.Group>
              <Row>
                <Col sm={10}>
                  <Form.Group>
                    <Form.Label>memory*</Form.Label>
                    <Form.Control
                      name="sizeMemory"
                      type="number"
                      placeholder="Enter memory"
                      value={data.sizeMemory}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={2}>
                  <Form.Group>
                    <Form.Label>GB/MB*</Form.Label>
                    <Form.Control as="select">
                      <option>GB</option>
                      <option>MB</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Label>disk*</Form.Label>
                <Form.Control
                  name="sizeDisk"
                  type="number"
                  placeholder="Enter disk"
                  value={data.sizeDisk}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter disk.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>storage class*</Form.Label>
                <Form.Control
                  name="storageType"
                  as="select"
                  value={data.storageType}
                  onChange={handleChange}
                  required
                >
                  <option>HDD</option>
                  <option>SSD_standard</option>
                  <option>SSD_premium</option>
                </Form.Control>
              </Form.Group>
            </div>
          </Tab>
          <Tab eventKey="network" title="Network">
            Tab content for network
          </Tab>
        </Tabs>
        {key === "basic" && (
          <Button variant="primary" type="submit" style={{ display: "block" }}>
            Create
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Create;
