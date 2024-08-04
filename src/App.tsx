import { Container, Navbar } from "react-bootstrap";
import "./App.scss";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <Navbar className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="#home">Market Place</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
