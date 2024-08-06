import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="outlined"
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
