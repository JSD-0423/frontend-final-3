import React from 'react'
import { TitledContainerWithButton } from "../TitledContainerWithButton/TitledContainerWithButton";
import PropTypes from 'prop-types';
import { BrandCard } from '../Cards/BrandCard/BrandCard';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ShopByBrand({ brands }) {
  return (

    <TitledContainerWithButton containerTitle="Shop By Brands" buttonTitle={"View all"}>
      <Box sx={{
        paddingRight: {
          xs: ".5rem",
          sm: "1rem"
        },
      }}>

      <Grid container spacing={{ xs: 1, sm: 1, md: 4 }} columns={{ xs: 6, sm: 12 }}>
        {brands ? brands.map((brand) => (
          <Grid item xs={2} md={2} key={brand.id}>
            <Link to={``} style={{textDecoration: 'none'}}>
            <BrandCard brand={brand}></BrandCard>
            </Link>
          </Grid>
        )) : 'no data found'}
      </Grid>
      </Box>

    </TitledContainerWithButton>
  )
}

ShopByBrand.propTypes = {
  brands: PropTypes.array
}