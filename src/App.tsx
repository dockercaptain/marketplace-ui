import { Container, Navbar } from "react-bootstrap";
import "./App.scss";
import ApplicationList from "./components/ApplicationList/ApplicationList";

function App() {
  return (
    <>
      <Navbar className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="#home">Market Place</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <ApplicationList />
      </Container>
    </>
  );
}

export default App;
