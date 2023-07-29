import React from 'react'
import { TitledContainerWithButton } from "../TitledContainerWithButton/TitledContainerWithButton";
import { CardsCarousel } from "../Cards/CardsCarousel/CardsCarousel";
import PropTypes from 'prop-types';
import { ProductCard } from '../Cards/ProductCard/ProductCard';
import { Box, Typography } from '@mui/material';
import { fetchData } from "../../Services/network";
import { useEffect, useState } from "react";

export default function NewArrivals() {

  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {

    const fetchNewArrivals = async () => {
      setLoading(true)
      try {
        const response = await fetchData('/products/new');
        setNewArrivals(response)
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }

    fetchNewArrivals();

  }, [])
  return (
    <TitledContainerWithButton containerTitle="New Arrivals" buttonTitle={"View All"} routePath={'/products/new'} >

      <CardsCarousel>
        {error ? (
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
              {error}
            </Typography></Box>
        ) : loading ? (
          <Box sx={{
            display: "flex",
            justifyContent: "center", height: "20vh",
            alignItems: "center",
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
        ) : newArrivals.length === 0 ? <Box sx={{
          display: "flex",
          justifyContent: "center", height: "20vh",
          alignItems: "center",
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
        </Box> : newArrivals.map((product) => (<Box key={product.id} sx={
          {
            flexShrink: 0,
            width: {
              xs: "40%",
              sm: "33%",
              md: "20%",
            },
          }
        }><ProductCard product={product} ></ProductCard></Box>))
        }
      </CardsCarousel>

    </TitledContainerWithButton>
  )
}

NewArrivals.propTypes = {
  products: PropTypes.array
}