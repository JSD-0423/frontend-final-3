import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import BannerCard from '../Cards/BannerCard/BannerCard'

function MakeupAndSkinCare() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography sx={{
                color: "dark.main",
                fontWeight: "fontWeightLabelSmall",
                fontSize: { xs: " 0.875rem",sm:"1.2rem", md: "1.5rem" },
            }}>
            Makeup & Skincare 
          </Typography>
        </Grid>
        <Grid item xs={12}>
         <BannerCard/>
        </Grid>
        <Grid item xs={6}>
         <BannerCard/>
        </Grid>
        <Grid item xs={6}>
        <BannerCard/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MakeupAndSkinCare