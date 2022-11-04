import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import AppBar from "./components/appbar/AppBar";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item className="left" xs={12} sm={12} md={6}>
            <Left />
          </Grid>
          <Grid item className="right" xs={12} sm={12} md={6}>
            <Right />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
