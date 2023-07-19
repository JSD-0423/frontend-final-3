import { Card } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

function BannerCard({ children, background, align }) {
    return (
        <Card align={align} sx={{
            backgroundImage: background,
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            borderRadius: {xs: '0.5rem', lg:'1.5rem'}
        }}>
            {children}
        </Card>
    )
}

BannerCard.propTypes = {
    children: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    align: PropTypes.string.isRequired
}

export default BannerCard