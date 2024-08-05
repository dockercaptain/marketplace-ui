import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import "./styles.scss";
import { useState } from "react";
import Divider from "../../common/components/Divider";

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
                <Row>
                  <Col>Environment*</Col>
                  <Col sm={8}>
                    <Form.Group>
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
                  </Col>
                </Row>
              </div>
              <div className="form-section">
                <h5>Server details </h5>
                <Divider />
                <Row>
                  <Col>server name*</Col>
                  <Col sm={8}>
                    <Form.Group>
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
                  </Col>
                </Row>
                <Row>
                  <Col>Admin username*</Col>
                  <Col sm={8}>
                    <Form.Group>
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
                  </Col>
                </Row>
                <Row>
                  <Col>password*</Col>
                  <Col sm={8}>
                    <Form.Group>
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
                  </Col>
                </Row>
                <Row>
                  <Col>version*</Col>
                  <Col sm={8}>
                    <Form.Group>
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
                  </Col>
                </Row>
              </div>
              <div className="form-section">
                <h5>Size </h5>
                <Divider />
                <Row>
                  <Col>
                    <Form.Label>cpu*</Form.Label>
                  </Col>
                  <Col sm={8}>
                    <Form.Group>
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
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>memory*</Form.Label>
                  </Col>
                  <Col sm={8}>
                    <Row>
                      <Col sm={10}>
                        <Form.Group>
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
                          <Form.Control as="select">
                            <option>GB</option>
                            <option>MB</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>disk*</Form.Label>
                  </Col>
                  <Col sm={8}>
                    <Form.Group>
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
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>storage class*</Form.Label>
                  </Col>
                  <Col sm={8}>
                    <Form.Group>
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
                  </Col>
                </Row>
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
