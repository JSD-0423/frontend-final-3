import * as React from 'react';
import { Box, Button, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';



export const ProductCard = ({ product, isDetailed }) => {
    console.log(product)
    return (
        <Card elevation={0}>
            <Box component={"img"} src={product.imgUrl ? product.imgUrl : product.productImage[0].src} alt={`${product.title ? product.title : product.productImage[0].alt}`} sx={{
                borderRadius: ".6rem",
                width: "100%",
                objectFit: "cover"

            }} />


            <Box component={"section"} sx={{
                height: "100%",
                display: "flex", flexDirection: "column"
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: ".2rem"
                }}>

                    <Typography sx={{
                        fontSize: { xs: ".75rem", sm: "1rem", md: "1rem" },
                        color: "dark.main",
                        fontWeight: "fontWeightMedium"
                    }}>{product.title}</Typography>

                    <Button sx={{
                        minWidth: "0"
                    }}>
                        <FavoriteBorderIcon sx={{
                            color: "dark.main",
                            fontSize: {
                                xs: "1rem",
                                sm: "1.2rem",
                                md: "1.5rem",
                                lg: "1.7rem"
                            }
                        }}></FavoriteBorderIcon>

                    </Button>

                </Box>

                <Typography
                    sx={{
                        color: "lowEmphsis",
                        fontSize: { xs: ".75rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: "fontWeightRegular"
                    }}>
                    {product.brand}
                </Typography>

                {isDetailed ?
                    <Box sx={{
                        display: { xs: "none", sm: "flex" },
                        alignItems: "center",
                        gap: "1rem",

                    }}>
                        <Rating value={product.rating} name='Stars' defaultValue={0} precision={.1} size='small' />
                        <Typography color={'primary.main'} sx={{
                            fontSize: {
                                xs: ".875rem", sm: ".9rem", md: "1.1rem"
                            },
                        }}>
                            {`${product.rating} Ratings`}
                        </Typography>
                    </Box> : null}

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem"
                }}>

                    <Typography
                        sx={{
                            fontSize: { xs: ".875rem", sm: "1rem", md: "1.1rem" },
                            color: "dark.main",
                            fontWeight: "fontWeightMedium"
                        }}>
                        {`$${product.price}`}
                    </Typography>
                    {isDetailed && product.price.discountPercentage !== 0 ?
                        <>
                            <Typography sx={{
                                fontSize: { xs: ".625rem", sm: ".9rem", md: "1rem" },
                                color: "lowEmphasis.main",
                                fontWeight: "fontWeightRegular",
                                textDecoration: "line-through"
                            }}
                            >
                                {`$${product.price}`}
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: ".625rem", sm: ".9rem", md: "1rem" },
                                color: "error.main",
                                fontWeight: "fontWeightRegular",
                            }}
                            >
                                {`%${product.discount} OFF`}
                            </Typography>
                        </>

                        : null

                    }

                </Box>


            </Box>


        </Card>
    )
}
ProductCard.propTypes = {
    product: PropTypes.shape({
        imgUrl: PropTypes.string,
        productImage: PropTypes.array,
        brand: PropTypes.string,
        title: PropTypes.string,
        rating: PropTypes.number,
        discount: PropTypes.number,
        price: PropTypes.number.isRequired,
    }),
    isDetailed: PropTypes.bool
}