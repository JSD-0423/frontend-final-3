import * as React from 'react';
import { Box, Button, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';



export const ProductCard = ({ product, isDetailed }) => {
    const discountedPrice = (product.price - (product.price * (product.discount / 100))).toFixed(2);
    return (
        <Card elevation={0}sx={{
            height:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
        }}>
            <Box component={"img"} src={product.productImage[0].src} alt={`${product.productImage[0].alt} logo`} sx={{
                borderRadius: ".6rem",
                width: "100%",
                height:"75%",
                objectFit: "cover",
                backgroundColor:"accent.main"
            }} />


            <Box component={"section"} sx={{
                
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
                    {product.title}
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
                        {`$${discountedPrice}`}
                    </Typography>

                    {product.discount > 0 ?
                        <Box sx={{
                            display:"flex",
                            flexWrap:"wrap"
                        }}>
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
                        </Box> : null
                    }
                </Box>


            </Box>


        </Card>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        sub_title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
        brand_id: PropTypes.number.isRequired,
        category_id: PropTypes.number.isRequired,
        productImage: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                src: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                product_id: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
    isDetailed: PropTypes.bool
}
