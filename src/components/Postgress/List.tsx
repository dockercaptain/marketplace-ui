import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("./create");
        }}
      >
        Create
      </Button>
    </div>
  );
};

export default List;
