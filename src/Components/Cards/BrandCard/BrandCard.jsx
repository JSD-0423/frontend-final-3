import { Card } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';


export const BrandCard = ({ brand }) => {
    return (
        <Card elevation={0} component={"img"} sx={{
            backgroundColor: 'accent.main',
            padding: { lg:"1.5rem",md: ".7rem", xs: "0.5rem" },
            objectFit: "contain",
            width: "100%",
            height: "100%",
            borderRadius: ".7rem"
        }} src={brand.imgUrl} alt={`${brand.name} logo`} >
        </Card>
    )
}
BrandCard.propTypes = {
    brand: PropTypes.object.isRequired
}