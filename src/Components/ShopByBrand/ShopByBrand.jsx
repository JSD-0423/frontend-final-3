import React, { useState, useEffect } from 'react'
import { TitledContainerWithButton } from "../TitledContainerWithButton/TitledContainerWithButton";
import { BrandCard } from '../Cards/BrandCard/BrandCard';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchData } from '../../Services/network';
import { StatusHandler } from '../Common/StatusHandler/StatusHandler';

export default function ShopByBrand() {

  const [brands, setBrands] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const result = await fetchData(`/brands`);
        setBrands(result);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
    fetchDataAsync();
  }, [])
  return (

    <TitledContainerWithButton containerTitle="Shop By Brands">
      <Box id="Brands" sx={{
        paddingRight: {
          xs: ".5rem",
          sm: "1rem"
        },
      }}>
        {error ?
          <StatusHandler content={error} height='50vh' />
          : loading ?
            <StatusHandler content="Loading ..." height='50vh' />
            : brands.length === 0 ?
              <StatusHandler content={"No Products Found"} height='50vh' />
              :
              (<Grid container spacing={{ xs: 1, sm: 1, md: 4 }} columns={{ xs: 6, sm: 12 }}>
                {brands ? brands.map((brand) => (
                  <Grid item xs={2} md={2} key={brand.id}>
                    <Link to={`products/brands/+${brand.id}`} style={{ textDecoration: 'none' }}>
                      <BrandCard brand={brand}></BrandCard>
                    </Link>
                  </Grid>
                )) : 'no data found'}
              </Grid>)}
      </Box>

    </TitledContainerWithButton >
  )
}
