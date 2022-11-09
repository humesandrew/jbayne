import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import './right.scss';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Right() {
  return (
    
    <Box sx={{ width: '100%', textAlign: 'center' }} >
      <div className='connectDiv'>
           <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Connect</Typography>
           
      <Stack spacing={4} sx={{width: '85%'}} >
      
        <Item >Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </Stack>
      </div>
    </Box>
    
  );
}
