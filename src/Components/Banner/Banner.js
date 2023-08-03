import { Container, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BannerCard from '../Cards/BannerCard/BannerCard'
import RoundedArrowButton from '../Buttons/RoundedArrowButton/RoundedArrowButton'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Banner({ fullWidthCardText, fullWidthCardLinkTo, halfWidthCard1Text, halfWidthCard1LinkTo, halfWidthCard2Text, halfWidthCard2LinkTo }) {
  return (
    <Box p={2} id="Trendy">
      <Grid container spacing={{ xs: '0.8125rem', md: '1.5rem', lg: '1.85rem' }}>
        <Grid item xs={12}>
          <BannerCard background={{ xs: 'url("./Assets/makeUpMobile.jpg")', sm: 'url("./Assets/makeUpDeskTop.jpg")' }} align='right'>
            <Container sx={{
              height: { xs: '100px', sm: '170px', md: '230px', lg: '290px', xl: '340px' },
              justifyContent: 'space-around',
              padding: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              margin: 0,
              textAlign: 'left'
            }}>
              <Typography variant='h4' sx={{
                maxWidth: { xs: '50%', sm: '40%', md: '30%', lg: '50%' },
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3.25rem' },
                color: 'rust.main',
                fontWeight: 'fontWeightBold',
              }}>
                {fullWidthCardText}
              </Typography>
              <Link to={fullWidthCardLinkTo} style={{ textDecoration: 'none' }}>
                <RoundedArrowButton backgroundColor='rgba(151, 69, 31, 0.14)' color='rust.main' justifyContent='start' />
              </Link>
            </Container>
          </BannerCard>
        </Grid>
        <Grid item xs={6}>
          <BannerCard background={{ xs: 'url("./Assets/skinCareMobile.jpg")', sm: 'url("./Assets/skinCareDeskTop.jpg")' }} align='right'>
            <Container sx={{
              height: { xs: '90px', sm: '120px', md: '160px', lg: '190px', xl: '220px' },
              justifyContent: 'space-around',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              margin: 0,
              textAlign: 'right'
            }}>
              <Typography variant='h4' sx={{
                maxWidth: { xs: '55%', sm: '58%', md: '55%', lg: '50%' },
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                color: 'maroon.main',
                fontWeight: 'fontWeightBolder',
              }}>
                {halfWidthCard1Text}
              </Typography>
              <Link to={halfWidthCard1LinkTo} style={{ textDecoration: 'none' }}>
                <RoundedArrowButton backgroundColor='rgba(255, 255, 255, 0.50)' color='maroon.main' justifyContent='start' />
              </Link>
            </Container>
          </BannerCard>
        </Grid>
        <Grid item xs={6}>
          <BannerCard background={{ xs: 'url("./Assets/facePacksMobile.jpg")', sm: 'url("./Assets/facePacksDeskTop.jpg")' }} align={'right'}>
            <Container sx={{
              height: { xs: '90px', sm: '120px', md: '160px', lg: '190px', xl: '220px' },
              justifyContent: 'space-around',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              margin: 0,
              textAlign: 'right'
            }}>
              <Typography variant='h4' sx={{
                maxWidth: { xs: '55%', sm: '65%', md: '55%', lg: '50%' },
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                color: 'primary.main',
                fontWeight: 'fontWeightBolder',
              }}>
                {halfWidthCard2Text}
              </Typography>
              <Link to={halfWidthCard2LinkTo} style={{ textDecoration: 'none' }}>
                <RoundedArrowButton backgroundColor='rgba(23, 73, 77, 0.16)' color='primary.main' justifyContent='start' />
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
  fullWidthCardLinkTo: PropTypes.string.isRequired,
  halfWidthCard1Text: PropTypes.string.isRequired,
  halfWidthCard1LinkTo: PropTypes.string.isRequired,
  halfWidthCard2Text: PropTypes.string.isRequired,
  halfWidthCard2LinkTo: PropTypes.string.isRequired
}

export default Banner