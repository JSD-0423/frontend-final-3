import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import BannerCard from '../Cards/BannerCard/BannerCard'
import AutoSlideContainer from '../AutoSlideContainer/AutoSlideContainer'

function HeroSection() {
  return (
    <Box sx={{
      width: '100%',
    }}>
      <AutoSlideContainer>
        <BannerCard background={{xs: 'url(./Assets/overTheShoulderPinkBagMobile.jpg)', sm:'url(./Assets/overTheShoulderPinkBagDeskTop.jpg)'}} align='right'>
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
                Carry yuor funk
              </Typography>
            </Container>
        </BannerCard>
        <BannerCard background={{xs: 'url(./Assets/overTheShoulderPinkBagMobile.jpg)', sm:'url(./Assets/overTheShoulderPinkBagDeskTop.jpg)'}} align='right'>
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
                Carry yuor funk
              </Typography>
            </Container>
        </BannerCard>
      </AutoSlideContainer>
    </Box>
  )
}


export default HeroSection