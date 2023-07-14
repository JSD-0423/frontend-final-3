import * as React from 'react';
import { Box, Button, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';



export const ProductCard = ({ product, isDetailed }) => {
    return (
        <Card sx={{
            flexShrink: 0,
            height: {
                xs: "15rem",
                sm:"16rem",
                md: "20rem",
                lg: "25rem"
            },
            width: {
                xs: "8.5rem",
                sm:"11rem",
                md: "13rem",
                lg: "17.75rem"
            },
            marginRight: "1rem"
        }} elevation={0}>
            <Box component={"img"} src={product.imgUrl}  alt={`${product.name} logo`}  sx={{
                borderRadius:".6rem",
                height:{
                    xs: "8.5rem",
                    md: "13rem",
                    lg: "17.75rem"
                },
                width:"100%",
                objectFit:"cover"
            
            }}/>

        
            <Box component={"section"} sx={{
                height:"100%",
                display: "flex", flexDirection: "column"
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: ".2rem"
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
                            color: "dark.main",
                            fontSize:{
                                xs:"1rem",
                                sm:"1.2rem",
                                md:"1.5rem",
                                lg:"1.7rem"
                            }
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

                {isDetailed ?
                    <Box sx={{
                        display: {xs:"none" ,sm:"flex"},
                        alignItems: "center",
                        fontSize: {
                            xs: "1.2rem",
                            sm: "1.5rem",
                            md: "1.8rem"
                        },

                    }}>
                        <Rating value={product.rating} name='Stars' defaultValue={0} precision={0.1} size='small'/>
                        <Typography color={'primary.main'} >
                            {`${product.rating} Ratings`}
                        </Typography>
                    </Box> : null}


                <Typography
                    sx={{
                        fontSize: { sm: "1rem", md: "1.1rem" },
                        color: "dark.main",
                        fontWeight: "fontWeightMedium"
                    }}>
                    {`$${product.price.current}`}
                </Typography>

            </Box>


        </Card>
    )
}
ProductCard.propTypes = {
    product: PropTypes.shape({
        imgUrl: PropTypes.string,
        brand: PropTypes.string,
        name: PropTypes.string,
        rating: PropTypes.number,
        price: PropTypes.shape({
            current: PropTypes.number,
            actual: PropTypes.number,
            dicountPercentage: PropTypes.number,
        })
    }).isRequired,
    isDetailed: PropTypes.bool
}
