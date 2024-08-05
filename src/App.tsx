import { Container, Navbar } from "react-bootstrap";
import "./App.scss";
import AppRoutes from "./routes/Routes";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="bg-body-secondary">
        <Container>
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Market Place
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="app-container">
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
