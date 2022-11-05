

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


import resumeData from "../../resumeData.js";
import './left.scss';



export default function Left() {
  return (
    <Box sx={{ width: '100%' }} className="left">
      <Stack spacing={2}>
       <div className='imageDiv'><img src={resumeData.image} alt={resumeData.name} className="image"></img></div>
       <div className='credentialsDiv'>
     <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Regional Director of Operations</Typography>
     <div><Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Panorama Eye Care</Typography></div>
     <div><Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Denver, CO</Typography></div>

       </div>
       <div className='contactDiv'>
       <div className='phoneDiv'> <LocalPhoneIcon />  <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>720-111-2568</Typography></div>
       <div className='emailDiv'><MailOutlineIcon /> <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>jbayne@gmail.com</Typography></div>

       </div>
      </Stack>
    </Box>
  );
}



