import { ComponentPropsWithoutRef } from "react";
import { Row, Col, Form } from "react-bootstrap";

interface FormGroupProps extends ComponentPropsWithoutRef<typeof Form.Control> {
  label: string;
  isSelect?: boolean;
  options?: string[];
  errorMessage?: string;
}

const FormGroup = ({
  label,
  isSelect,
  options,
  errorMessage,
  ...rest
}: FormGroupProps) => {
  return (
    <Row>
      <Col>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col sm={10}>
        <Form.Group controlId={`form${rest.name}`}>
          {isSelect ? (
            <Form.Control as="select" {...rest}>
              {options?.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Form.Control>
          ) : (
            <Form.Control {...rest} />
          )}
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default FormGroup;
