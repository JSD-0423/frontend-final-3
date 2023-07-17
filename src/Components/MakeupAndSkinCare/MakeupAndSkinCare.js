import { Container, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BannerCard from '../Cards/BannerCard/BannerCard'
import RoundedArrowButton from '../Buttons/RoundedArrowButton/RoundedArrowButton'

function MakeupAndSkinCare() {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{
            color: "dark.main",
            fontWeight: "fontWeightLabelSmall",
            fontSize: { xs: " 0.875rem", sm: "1.2rem", md: "1.5rem" },
          }}>
            Makeup & Skincare
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
                fontSize: { xs: '0.625rem', ms: '3.25rem' },
                my: 1,
                textTransform: 'uppercase'
              }}>
                LifeStyle
              </Typography>
              <Typography variant='h4' sx={{
                maxWidth: '60%',
                fontSize: { xs: '1rem', ms: '3.25rem' },
                color: 'rust.main',
                fontWeight: 'fontWeightBold',
                mb: 1.5
              }}>
                MakeUp Accessories from Top Brands
              </Typography>
              <RoundedArrowButton backgroundColor='rgba(151, 69, 31, 0.14)' color='rust.main'  justifyContent='start'/>
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
                // maxWidth: '55%',
                fontSize: { xs: '0.875rem', ms: '3.25rem' },
                color: 'maroon.main',
                fontWeight: 'fontWeightBold',
                my: 2,
              }}>
                Skincare Essentials
              </Typography>
              <RoundedArrowButton backgroundColor='rgba(255, 255, 255, 0.50)' color='maroon.main' justifyContent='end'/>
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
                // maxWidth: '50%',
                fontSize: { xs: '0.875rem', ms: '3.25rem' },
                color: 'primary.main',
                fontWeight: 'fontWeightBold',
                my: 2,
              }}>
                Facepacks & Peels
              </Typography>
              <RoundedArrowButton backgroundColor='rgba(23, 73, 77, 0.16)' color='primary.main'  justifyContent='end'/>
            </Container>
          </BannerCard>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MakeupAndSkinCare