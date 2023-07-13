import { Grid } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

function SocialMediaLinks({ socialMedia }) {
  return (
    <Grid container spacing={2} mb={2} sx={{
      display: 'flex',
      justifyContent: {xs: 'center', sm: 'end'}
    }}>
      {socialMedia.length ? socialMedia.map((media, i) => {
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

SocialMediaLinks.propTypes = {
  socialMedia: PropTypes.array.isRequired,
}

export default SocialMediaLinks