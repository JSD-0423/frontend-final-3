import React from 'react'
import {TitledContainerWithButton} from "../../../Components/TitledContainerWithButton/TitledContainerWithButton";
import {CardsCarousel} from "../../../Components/Cards/CardsCarousel/CardsCarousel";
import PropTypes from 'prop-types';
import { ProductCard } from '../../../Components/Cards/ProductCard/ProductCard';
import { Box } from '@mui/material';

export default function NewArrivals({products}) {
  return (
    <TitledContainerWithButton  containerTitle="New Arrivals" buttonTitle={"View All"} >
        <CardsCarousel>
        {products.map((product)=>(<Box key={product.id} sx={
          {
            flexShrink: 0,
            height: {
                xs: "13rem",
                sm:"16rem",
                md: "18rem",
                lg: "23rem"
            },
            width: {
                xs: "8.5rem",
                sm:"11rem",
                md: "13rem",
                lg: "17.75rem"
            },
            marginRight: "1rem"
          }
        }><ProductCard product={product}  isDetailed={false}></ProductCard></Box>))}
        </CardsCarousel>
    </TitledContainerWithButton>
  )
}

NewArrivals.propTypes = {
    products: PropTypes.array
}