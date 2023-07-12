import * as React from 'react';
import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';



export const ProductCard = ({ product }) => {
    return (
        <Card sx={{
            flexShrink: 0,
            minHeight: {
                xs: "12.625rem",
                md: "15rem",
                lg: "17.875rem"
            },
            minWidth: {
                xs: "8.5rem",
                md: "13rem",
                lg: "17.875rem"
            },
        }} elevation={0}>

            <img src={product.imgUrl} alt={`${product.name} logo`} style={{
                minHeight: {
                    sx: "8.625rem",
                    md: "17.875rem"
                },
                width: "100%",
                borderRadius: ".3rem",
                objectFit: "cover"
            }} />

            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>

                <Typography sx={{
                    fontSize: { sm: "1rem", md: "1.1rem" },
                    color: "dark.main",
                    fontWeight: "fontWeightMedium"
                }}>{product.name}</Typography>

                <Button sx={{
                    minWidth: "0"
                }}>
                    <FavoriteBorderIcon sx={{
                        color: "dark.main"
                    }}></FavoriteBorderIcon>

                </Button>

            </Box>

            <Typography
                sx={{
                    color: "lowEmphsis",
                    fontSize: { xs: ".875rem", md: "1rem" },
                    fontWeight: "fontWeightRegular"
                }}>
                {product.brand}
            </Typography>
            
            <Typography
                sx={{
                    fontSize: { sm: "1rem", md: "1.1rem" },
                    color: "dark.main",
                    fontWeight: "fontWeightMedium"
                }}>
                {product.price.current}
            </Typography>


        </Card>
    )
}
ProductCard.propTypes = {
    product: PropTypes.shape({
        imgUrl:PropTypes.string,
        brand:PropTypes.string,
        name:PropTypes.string,
        price:PropTypes.shape({
            current:PropTypes.number,
            actual:PropTypes.number,
            dicountPercentage:PropTypes.number,
        })
    }).isRequired
}
