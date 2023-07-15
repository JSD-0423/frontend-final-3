import React from 'react'
import {TitledContainerWithButton} from "../../../Components/TitledContainerWithButton/TitledContainerWithButton";
import {CardsCarousel} from "../../../Components/Cards/CardsCarousel/CardsCarousel";
import PropTypes from 'prop-types';
import { BrandCard } from '../../../Components/Cards/BrandCard/BrandCard';


export default function ShopByBrand({brands}) {
  return (
    <TitledContainerWithButton  containerTitle="Shop By Brands">
    <CardsCarousel>
    { brands.map(brand => (<BrandCard brand={brand} key={brand.id}></BrandCard>))}
    </CardsCarousel>
</TitledContainerWithButton>
  )
}

ShopByBrand.propTypes = {
    brands: PropTypes.array
}