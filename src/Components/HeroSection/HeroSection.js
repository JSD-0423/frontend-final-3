import React from 'react'
import { Box } from '@mui/material'
import AutoSlideContainer from '../AutoSlideContainer/AutoSlideContainer';
import SlideImages from '../SlideImages/SlideImages';

function HeroSection() {
  return (
    <Box sx={{
      width: '100%', 
      backgroundColor: 'red',
      hight: '500px'
    }}>
   <AutoSlideContainer>
    {SlideImages}
   </AutoSlideContainer>
    </Box>
  )
}


export default HeroSection