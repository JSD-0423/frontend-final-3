import React from 'react'
import { TitledContainerWithButton } from "../TitledContainerWithButton/TitledContainerWithButton";
import { CardsCarousel } from "../Cards/CardsCarousel/CardsCarousel";
import PropTypes from 'prop-types';
import { ProductCard } from '../Cards/ProductCard/ProductCard';
import { Box } from '@mui/material';

export default function NewArrivals({ products }) {
  return (
    <TitledContainerWithButton containerTitle="New Arrivals" buttonTitle={"View All"} >
      <Box>
        

      <CardsCarousel>
        {products.map((product) => (<Box key={product.id} sx={
          {
            flexShrink: 0,
            width: {
              xs: "40%",
              sm: "33%",
              md: "20%",
            },
          }
        }><ProductCard product={product} isDetailed={false}></ProductCard></Box>))}
      </CardsCarousel>
      </Box>
    </TitledContainerWithButton>
  )
}

NewArrivals.propTypes = {
  products: PropTypes.array
}