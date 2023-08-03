import React from 'react'
import { TitledContainerWithButton } from "../TitledContainerWithButton/TitledContainerWithButton";
import { CardsCarousel } from "../Cards/CardsCarousel/CardsCarousel";
import PropTypes from 'prop-types';
import { ProductCard } from '../Cards/ProductCard/ProductCard';
import { Box } from '@mui/material';
import { fetchData } from "../../Services/network";
import { useEffect, useState } from "react";
import { StatusHandler } from '../Common/StatusHandler/StatusHandler';

export default function NewArrivals() {

  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {

    const fetchNewArrivals = async () => {
      setLoading(true)
      try {
        const response = await fetchData('/products/new');
        setNewArrivals(response.products)
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
          <StatusHandler content={error} height='20vh' />
        ) : loading ? (
          <StatusHandler content="Loading ..." height='20vh' />
        ) : newArrivals.length === 0 ?
          <StatusHandler content="No Products Found" height='20vh' />
          : newArrivals.map((product) => (<Box key={product.id} sx={
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