import React from 'react'
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export const TitledContainerWithButton = ({ containerTitle, buttonTitle, children }) => {

  return (

    <Box container sx={{
      paddingLeft: {
        xs: ".5rem",
        sm: "1rem"
      },
      marginBlock: { xs: '1rem', md: "1.5rem" },
    }} >

      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }}>

        <Typography

          sx={{
            color: "dark.main",
            fontWeight: "fontWeightLabelSmall",
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2.125rem" },
          }}>

          {containerTitle}

        </Typography>

        {
          (buttonTitle) ?
            <Box>
              <Button variant='text' sx={{
                fontWeight: "fontWeightMedium",
                fontSize: { xs: " 0.875rem", sm: ".9rem", md: "1rem" }
              }}>{buttonTitle}
                <NavigateNextIcon />
              </Button>
            </Box>


            : null
        }

      </Box>

      {children}

    </Box>

  )

}

TitledContainerWithButton.propTypes = {
  children: PropTypes.node.isRequired,
  containerTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
}
