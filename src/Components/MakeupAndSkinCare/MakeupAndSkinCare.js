import { Container, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BannerCard from '../Cards/BannerCard/BannerCard'
import RoundedArrowButton from '../Buttons/RoundedArrowButton/RoundedArrowButton'
import PropTypes from 'prop-types';

function MakeupAndSkinCare({ headerText, fullWidthCardTitle, fullWidthCardText, halfWidthCard1Text, halfWidthCard2Text }) {
  return (
    <Box p={2}>
      <Grid container spacing={{ xs: '0.8125rem', md: '1.5rem', lg: '1.85rem' }}>
        <Grid item xs={12}>
          <Typography sx={{
            color: "dark.main",
            fontWeight: "fontWeightLabelSmall",
            fontSize: { xs: " 0.875rem", sm: "1.2rem", md: "1.5rem" },
            display: { lg: 'none' }
          }}>
            {headerText}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <BannerCard background={{ xs: 'url("./Assets/makeUpMobile.jpg")', sm: 'url("./Assets/makeUpDeskTop.jpg")' }} align='right' >
            <Container sx={{
              // my: 0,
              textAlign: 'left',
              wordWrap: 'wrap',
            }}>
              <Typography variant='body1' my={1} sx={{
                fontWeight: 'fontWeightRegular',
                color: 'rust.main',
                fontSize: { xs: '0.625rem', sm: '1rem', md: '1.5rem', lg: '1.875rem' },
                mb: { xs: 1, md: 1 },
                mt: { xs: 2, md: 7 },
                textTransform: 'uppercase'
              }}>
                {fullWidthCardTitle}
              </Typography>
              <Typography variant='h4' sx={{
                maxWidth: { xs: '60%', sm: '50%', md: '45%', lg: '50%' },
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3.25rem' },
                color: 'rust.main',
                fontWeight: 'fontWeightBold',
                mb: 1.5
              }}>
                {fullWidthCardText}
              </Typography>
              <RoundedArrowButton backgroundColor='rgba(151, 69, 31, 0.14)' color='rust.main' justifyContent='start' />
            </Container>
          </BannerCard>
        </Grid>
        <Grid item xs={6}>
          <BannerCard background={{ xs: 'url("./Assets/skinCareMobile.jpg")', sm: 'url("./Assets/skinCareDeskTop.jpg")' }} align='right'>
            <Container align='right' sx={{
              textAlign: 'right',
              wordWrap: 'wrap',
            }}>
              <Typography variant='h4' sx={{
                ml: { xs: '2rem', sm: '50%', md: '45%', lg: '65%' },
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                color: 'maroon.main',
                fontWeight: 'fontWeightBolder',
                my: 2,
              }}>
                {halfWidthCard1Text}
              </Typography>
              <RoundedArrowButton backgroundColor='rgba(255, 255, 255, 0.50)' color='maroon.main' justifyContent='end' />
            </Container>
          </BannerCard>
        </Grid>
        <Grid item xs={6}>
          <BannerCard background={{ xs: 'url("./Assets/facePacksMobile.jpg")', sm: 'url("./Assets/facePacksDeskTop.jpg")' }}>
            <Container sx={{
              textAlign: 'right',
              wordWrap: 'wrap',
            }}>
              <Typography variant='h4' sx={{
                ml: { xs: '2rem', sm: '50%', md: '45%', lg: '65%' },
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                color: 'primary.main',
                fontWeight: 'fontWeightBolder',
                my: 2,
              }}>
                {halfWidthCard2Text}
              </Typography>
              <RoundedArrowButton backgroundColor='rgba(23, 73, 77, 0.16)' color='primary.main' justifyContent='end' />
            </Container>
          </BannerCard>
        </Grid>
      </Grid>
    </Box>
  )
}

MakeupAndSkinCare.propTypes = {
  headerText: PropTypes.string.isRequired,
  fullWidthCardText: PropTypes.object.isRequired,
  fullWidthCardTitle: PropTypes.object.isRequired,
  halfWidthCard1Text: PropTypes.object.isRequired,
  halfWidthCard2Text: PropTypes.object.isRequired,
}

export default MakeupAndSkinCare