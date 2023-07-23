import React from 'react'
import { Box } from '@mui/material';
import PropTypes from 'prop-types';


export const CardsCarousel = ({ children }) => {
  return (
    <Box container sx={{
      width: "100%",
      height: "auto",
      display: "flex",
      gap:"1rem",
      overflow: "auto",
      whiteSpace: "nowrap"
    }}>
      {children}
    </Box>
  )
}

CardsCarousel.propTypes = {
  children: PropTypes.any.isRequired
}
