import { Col, Form, Row } from "react-bootstrap";

type FormGroupProps = {
  label: string;
  value: string;
  type?: string;
  name: string;
  isSelect?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options?: string[];
  errorMessage?: string;
  placeholder?: string;
  required?: boolean;
};

export const FormGroup = ({
  label,
  value,
  handleChange,
  name,
  type,
  options,
  errorMessage,
  placeholder,
  isSelect,
  required,
}: FormGroupProps) => {
  return (
    <Row>
      <Col>{label}</Col>
      <Col sm={10}>
        <Form.Group>
          {isSelect ? (
            <Form.Control
              required
              as="select"
              name={name}
              value={value}
              onChange={handleChange}
            >
              {options?.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Form.Control>
          ) : (
            <Form.Control
              required={required}
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
            />
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
