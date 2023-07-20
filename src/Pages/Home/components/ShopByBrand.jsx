import React from 'react'
import { TitledContainerWithButton } from "../../../Components/TitledContainerWithButton/TitledContainerWithButton";
import PropTypes from 'prop-types';
import { BrandCard } from '../../../Components/Cards/BrandCard/BrandCard';
import { Grid } from '@mui/material';


export default function ShopByBrand({ brands }) {
  return (
    <TitledContainerWithButton containerTitle="Shop By Brands" buttonTitle={"View all"}>

      <Grid container spacing={{ xs:1, sm: 1, md: 4 }} columns={{ xs: 6, sm: 12 }} sx={{
        height: { xs: "14rem", sm: "7rem", md: "10.5rem", lg:"13rem" }
      }}>
        {brands.map((brand) => (
          <Grid item xs={2} md={2} key={brand.id} sx={{ paddingRight: "1rem" }} >
            <BrandCard brand={brand}></BrandCard>
          </Grid>
        ))}
      </Grid>

    </TitledContainerWithButton>
  )
}

ShopByBrand.propTypes = {
  brands: PropTypes.array
}