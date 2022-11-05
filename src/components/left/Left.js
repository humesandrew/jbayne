

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


import resumeData from "../../resumeData.js";
import './left.scss';



export default function Left() {
  return (
    <Box sx={{ width: '100%' }} className="left">
      <Stack spacing={2}>
       <div className='imageDiv'><img src={resumeData.image} alt={resumeData.name}></img></div>
       <div className='credentialsDiv'>Credentials</div>
       <div className='contactDiv'>Contact</div>
      </Stack>
    </Box>
  );
}



