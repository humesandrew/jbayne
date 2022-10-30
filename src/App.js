
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AppBar from './components/appbar/AppBar';
import Left from './components/left/Left';
import Right from './components/right/Right';
import './app.css';

function App() {
  return (
    <div className="App">
    
      <AppBar />
 
 <div className="main"> <Box className='left'>
     <Left />
     </Box>
     <Box className='right'>
   <Right />
     </Box>
    </div>
    </div>
  );
}

export default App;
