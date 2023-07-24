import { Container, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BannerCard from '../Cards/BannerCard/BannerCard'
import RoundedArrowButton from '../Buttons/RoundedArrowButton/RoundedArrowButton'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Banner({ fullWidthCardText, halfWidthCard1Text, halfWidthCard2Text }) {
  return (
    <Box p={2}>
      <Grid container spacing={{ xs: '0.8125rem', md: '1.5rem', lg: '1.85rem' }}>
        <Grid item xs={12}>
          <BannerCard background={{ xs: 'url("./Assets/makeUpMobile.jpg")', sm: 'url("./Assets/makeUpDeskTop.jpg")' }} align='right'>
            <Container sx={{
              textAlign: 'left',
              wordWrap: 'wrap',
            }}>
              <Typography variant='h4' sx={{
                maxWidth: { xs: '60%', sm: '50%', md: '30%', lg: '50%' },
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3.25rem' },
                color: 'rust.main',
                fontWeight: 'fontWeightBold',
                my: 2.5
              }}>
                {fullWidthCardText}
              </Typography>
            <Link to='/products/limited' style={{textDecoration: 'none'}}>
              <RoundedArrowButton backgroundColor='rgba(151, 69, 31, 0.14)' color='rust.main' justifyContent='start'/>
            </Link>
            </Container>
          </BannerCard>
        </Grid>
        <Grid item xs={6}>
          <BannerCard background={{ xs: 'url("./Assets/skinCareMobile.jpg")', sm: 'url("./Assets/skinCareDeskTop.jpg")' }} align='right'>
            <Container sx={{
              textAlign: 'right',
              wordWrap: 'wrap',
            }}>
              <Typography variant='h4' sx={{
                ml: { xs: '2rem', sm: '20%', md: '45%', lg: '50%' },
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                color: 'maroon.main',
                fontWeight: 'fontWeightBolder',
                my: 2,
              }}>
                {halfWidthCard1Text}
              </Typography>
              <Link to='/products/limited' style={{textDecoration: 'none'}}>
              <RoundedArrowButton backgroundColor='rgba(151, 69, 31, 0.14)' color='rust.main' justifyContent='start'/>
            </Link>
            </Container>
          </BannerCard>
        </Grid>
        <Grid item xs={6}>
          <BannerCard background={{ xs: 'url("./Assets/facePacksMobile.jpg")', sm: 'url("./Assets/facePacksDeskTop.jpg")' }} align={'right'}>
            <Container sx={{
              textAlign: 'right',
              wordWrap: 'wrap',
            }}>
              <Typography variant='h4' sx={{
                ml: { xs: '1rem', sm: '20%', md: '45%', lg: '50%' },
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                color: 'primary.main',
                fontWeight: 'fontWeightBolder',
                my: 2,
              }}>
                {halfWidthCard2Text}
              </Typography>
              <Link to='/products/limited' style={{textDecoration: 'none'}}>
              <RoundedArrowButton backgroundColor='rgba(151, 69, 31, 0.14)' color='rust.main' justifyContent='start'/>
            </Link>
            </Container>
          </BannerCard>
        </Grid>
      </Grid>
    </Box>
  )
}

Banner.propTypes = {
  fullWidthCardText: PropTypes.string.isRequired,
  halfWidthCard1Text: PropTypes.string.isRequired,
  halfWidthCard2Text: PropTypes.string.isRequired,
}

export default Banner