import React from 'react'
import {TitledContainerWithButton} from "../../../Components/TitledContainerWithButton/TitledContainerWithButton";
import {CardsCarousel} from "../../../Components/Cards/CardsCarousel/CardsCarousel";
import PropTypes from 'prop-types';
import { ProductCard } from '../../../Components/Cards/ProductCard/ProductCard';

export default function NewArrivals({products}) {
  return (
    <TitledContainerWithButton  containerTitle="New Arrivals" buttonTitle={"View All"} >
        <CardsCarousel>
        {products.map((product)=>(<ProductCard product={product} key={product.id} isDetailed={true}></ProductCard>))}
        </CardsCarousel>
    </TitledContainerWithButton>
  )
}

NewArrivals.propTypes = {
    products: PropTypes.array
}