import TodoApp from "./TodoApp";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { blue } from '@mui/material/colors';


function App() {
  return (
    <>
      <Box>
        <AppBar position="static" sx={{ background: blue[900]}}>
          <Toolbar
            variant="dense"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h6" color="inherit" component="div">
              Todo List
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <TodoApp />
    </>
  );
}

export default App;
