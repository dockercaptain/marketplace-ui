import "./App.scss";
import AppRoutes from "./routes/Routes";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-container">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Container>
              <Toolbar sx={{ padding: "0px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Market Place
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      </div>

      <Container className="app-container">
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
