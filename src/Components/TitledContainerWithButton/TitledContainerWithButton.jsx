import React from 'react'
import PropTypes from 'prop-types';
import {Box, Typography, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export  const TitledContainerWithButton=({containerTitle,buttonTitle,children})=> {

  return (  
    
    <Box container display={'flex'} flexDirection={'column'} sx={{
      paddingBlock:"0.2rem",
      paddingLeft:"1rem",
      marginBlock:'1rem',
    }} >

      <Box sx={{
        display:"flex",marginBlockEnd:".5rem",
        justifyContent:"space-between",
        alignItems:"baseline"
      }}>

        <Typography 
       
         sx={{
                color: "dark.main",
                fontWeight: "fontWeightLabelSmall",
                fontSize: { xs: " 0.875rem",sm:"1.2rem", md: "1.5rem" },
            }}>
              
           {containerTitle}
            
         </Typography>

        {
        (buttonTitle)?
        <Box sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginRight:".5rem",

        }}>
        <Button variant='text' sx={{
              fontWeight:"fontWeightMedium",
              fontSize: { xs: " 0.875rem",sm:".9rem", md: "1rem" ,paddingInline:"0.5rem" },
            }}>{buttonTitle}
            </Button>
        <NavigateNextIcon/>
        </Box>
        

        :null
        }
        
      </Box>

        {children}

    </Box>

  )

}

TitledContainerWithButton.propTypes={
  children:PropTypes.node.isRequired,
  containerTitle:PropTypes.string.isRequired,
  buttonTitle:PropTypes.string,
}
