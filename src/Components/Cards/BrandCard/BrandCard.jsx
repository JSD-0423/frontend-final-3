import { Card } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';


export const BrandCard = ({ brand }) => {
    return (
        <Card elevation={0} sx={{
            display: "flex",
            backgroundColor: 'accent.main',
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            height: {
                xs: "5.1rem",
                sm: "6.5rem",
                md: "8.5rem",
                lg: "10.5rem"

            },
            width: {
                xs: "5.1rem",
                sm: "6.5rem",
                md: "8.5rem",
                lg: "10.5rem"

            }
        }} >
            <img src={brand.imgUrl} alt={`${brand.name} logo`} style={{
                width: "100%",
                height: "100%"
                , objectFit: "contain"
            }} />
        </Card>
    )
}
BrandCard.propTypes = {
    brand: PropTypes.object.isRequired
}
BrandCard.defaultProp = {
    brand: PropTypes.object.isRequired
}