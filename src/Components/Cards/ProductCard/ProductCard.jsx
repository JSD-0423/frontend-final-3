import * as React from 'react';
import { Box, Button, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product, isDetailed }) => {
    const discountedPrice = (product.price - (product.price * (product.discount / 100))).toFixed(2);
    return (
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
            <Card elevation={0} sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",

            }}>
                <Box component={"img"} src={product.productImage?product.productImage[0].src:product.brand.img} alt={`${product.productImage?product.productImage[0].alt:product.brand.name} logo`} sx={{
                    borderRadius: ".6rem",
                    width: "100%",
                    height: "62%",
                    objectFit: "cover",
                    backgroundColor: "accent.main",
                    aspectRatio: '1/1'
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
                            fontWeight: "fontWeightMedium",

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
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: "0", sm: "1.3rem" },
                            justifyContent: {
                                xs: "space-between",
                                sm: "normal"
                            },
                            flexWrap: "nowrap",
                            textOverflow: "ellipsis"
                            , overflow: "hidden"
                            , whiteSpace: "nowrap"

                        }}>
                            <Rating value={product.rating} name='Stars' defaultValue={0} precision={.1} size='small' />
                            <Typography color={'primary.main'} sx={{
                                fontSize: {
                                    xs: ".875rem", sm: ".9rem", md: "1.1rem"
                                }, overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {`${product.rating_count} Ratings`}
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
                                fontWeight: "fontWeightMedium",

                            }}>
                            {`$${discountedPrice}`}
                        </Typography>

                        {product.discount > 0 ?
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: ".3rem",
                                flexWrap: "nowrap",
                                textOverflow: "ellipsis"
                                , overflow: "hidden"
                                , whiteSpace: "nowrap"
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
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',

                                }}
                                >
                                    {`%${product.discount} OFF`}
                                </Typography>
                            </Box> : null
                        }
                    </Box>


                </Box>


            </Card>
        </Link>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        brand_id: PropTypes.number.isRequired,
        category_id: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        productImage: PropTypes.arrayOf(PropTypes.shape({
            alt: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            product_id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired
        }).isRequired).isRequired,
        quantity: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        rating_count: PropTypes.number.isRequired,
        sub_title: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired
    }).isRequired.isRequired,
    isDetailed: PropTypes.bool
}
