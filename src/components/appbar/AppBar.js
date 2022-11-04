import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import "./appbar.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ width: '100%' }}>
        <Toolbar>
     
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Jackie Bayne
          </Typography>
          <Button color="inherit">Ophthalmic Professional</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
