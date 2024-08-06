import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";
type FormRowProps = {
  label: string;
  children: React.ReactNode;
};
const FormRow: FunctionComponent<FormRowProps> = ({ label, children }) => {
  return (
    <Row>
      <Col>{label}</Col>
      <Col sm={10}>{children}</Col>
    </Row>
  );
};

export default FormRow;
