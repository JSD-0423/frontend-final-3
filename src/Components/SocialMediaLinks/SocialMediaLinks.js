import { Grid, Link } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

SocialMediaLinks.propTypes = {
  socialMedia: PropTypes.array.isRequired,
}

function SocialMediaLinks({ socialMedia }) {
  return (
    <Grid container spacing={2}>
      {socialMedia ? socialMedia.map(media => {
        <Grid item xs={3}>
          <Link href={media.Link} variant="div">{media.Icon}</Link>
        </Grid>
      }) : null
      }
    </Grid>
  )
}

export default SocialMediaLinks