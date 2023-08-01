import React, {useState, useEffect} from 'react'
import { TitledContainerWithButton } from "../TitledContainerWithButton/TitledContainerWithButton";
import { BrandCard } from '../Cards/BrandCard/BrandCard';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchData } from '../../Services/network';

export default function ShopByBrand() {

  const [brands, setBrands] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const result = await fetchData(`https://store-osn9.onrender.com/brands`);
        setBrands(result);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
    fetchDataAsync();
  }, [])
  return (

    <TitledContainerWithButton containerTitle="Shop By Brands" buttonTitle={"View all"}>
      <Box id="Brands" sx={{
        paddingRight: {
          xs: ".5rem",
          sm: "1rem"
        },
      }}>
      {error ? (
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", height: "50vh",
                    width: "100%"
                }}>
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontSize: {
                                xs: '1rem',
                                sm: "2rem"
                            },
                            fontWeight: "fontWeightLabelSmall"
                        }}
                    >
                        {error}
                    </Typography></Box>
            ): loading ? (
              <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", height: "50vh",
                  width: "100%"
              }}>
                  <Typography
                      sx={{
                          color: "primary.main",
                          fontSize: {
                              xs: '1rem',
                              sm: "2rem"
                          },
                          fontWeight: "fontWeightLabelSmall"
                      }}
                  >
                      Loading...
                  </Typography>
              </Box>
          ) : brands.length === 0 ? 
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", height: "20vh",
            width: "100%"
        }}>
            <Typography
                sx={{
                    color: "primary.main",
                    fontSize: {
                        xs: '1rem',
                        sm: "2rem"
                    },
                    fontWeight: "fontWeightLabelSmall"
                }}
            >
                No Products Found
            </Typography>
        </Box> : 
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

    </TitledContainerWithButton>
  )
}
