import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import BannerCard from '../Cards/BannerCard/BannerCard'
import AutoSlideContainer from '../AutoSlideContainer/AutoSlideContainer'

function HeroSection() {
  return (
    <Box sx={{
      width: '100%',
      p: 2
    }}>
      <AutoSlideContainer>
        <BannerCard background={{ xs: 'url(./Assets/overTheShoulderPinkBagMobile.jpg)', sm: 'url(./Assets/overTheShoulderPinkBagDeskTop.jpg)' }} align='right'>
          <Container sx={{
            textAlign: 'left',
            height: { sm: '150px', md: '200px', lg: '300px' },
            width: { xs: '58%', sm: '50%', lg: '50%' },
            my: { xs: '0.7rem', sm: '1rem', lg: '2rem' },
            borderTopLeftRadius: '1.5rem',
            borderBottomLeftRadius: '1.5rem',
            background: 'rgba(222, 222, 222, 0.70)',
            backdropFilter: 'blur(2.5px)',
            marginRight: 0,
            paddingRight: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
            <Typography variant='h4' sx={{
              fontSize: { xs: '24px', sm: '30px', md: '40px', lg: '60px' },
              color: 'primary.main',
              fontWeight: 'fontWeightBolder',
            }}>
              Carry your Funk
            </Typography>
            <Typography sx={{
              color: 'primary.main',
              fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '28px' },
              fontWeight: 'fontWeightMedium'
            }}>
              Trendy handbags collections for your party animal
            </Typography>
          </Container>
        </BannerCard>
        <BannerCard background={{ xs: 'url(./Assets/overTheShoulderPinkBagMobile.jpg)', sm: 'url(./Assets/overTheShoulderPinkBagDeskTop.jpg)' }} align='right'>
          <Container sx={{
            textAlign: 'left',
            height: { sm: '150px', md: '200px', lg: '300px' },
            width: { xs: '58%', sm: '50%', lg: '50%' },
            my: { xs: '0.7rem', sm: '1rem', lg: '2rem' },
            borderTopLeftRadius: '1.5rem',
            borderBottomLeftRadius: '1.5rem',
            background: 'rgba(222, 222, 222, 0.70)',
            backdropFilter: 'blur(2.5px)',
            marginRight: 0,
            paddingRight: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
            <Typography variant='h4' sx={{
              fontSize: { xs: '24px', sm: '30px', md: '40px', lg: '60px' },
              color: 'primary.main',
              fontWeight: 'fontWeightBolder',
            }}>
              Carry your Funk
            </Typography>
            <Typography sx={{
              color: 'primary.main',
              fontSize: { xs: '12px', sm: '15px', md: '20px', lg: '28px' },
              fontWeight: 'fontWeightMedium'
            }}>
              Trendy handbags collections for your party animal
            </Typography>
          </Container>
        </BannerCard>
      </AutoSlideContainer>
    </Box >
  )
}


export default HeroSection