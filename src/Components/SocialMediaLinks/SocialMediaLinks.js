import { Grid } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';


SocialMediaLinks.propTypes = {
  socialMedia: PropTypes.array.isRequired,
}

function SocialMediaLinks({ socialMedia }) {
  return (
    <Grid container spacing={2} mb={2} sx={{
      display: 'flex',
      justifyContent: {xs: 'center', sm: 'end'}
    }}>
      {socialMedia ? socialMedia.map((media, i) => {
        return <Grid item xs={'auto'} p={0} key={i}>
          <media.Icon sx={{
            color: 'primaryTint.main',
            fontSize: '38px',
            padding: 0
          }}/>
        </Grid>
      }) : null
      }
    </Grid>
  )
}

export default SocialMediaLinks