import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Grid, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProductCard } from '../../Components/Cards/ProductCard/ProductCard';
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../Services/network";
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stepper from '../../Components/Stepper/Stepper';
import PropTypes from 'prop-types';

const dummyProduct=
    {
        id: 1,
        title: "iPhone 13 Pro",
        sub_title: "iPhone 13 Pro",
        description: "The latest flagship iPhone with advanced features.",
        price: 999.99,
        quantity: 10,
        rating: 4.7,
        rating_count: 4,
        createdAt: "2023-07-26T10:17:55.000Z",
        updatedAt: "2023-07-26T10:17:55.000Z",
        discount: 2,
        brand_id: 1,
        category_id: 1,
        productImage: [
            {
                id: 1,
                src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1654893618197",
                alt: "iphone-13",
                product_id: 1
            }
        ]
    }


const StyledButton = styled('button')(({ theme }) => ({
    ":focus": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.bright.main,
        outline: 'none',
    },
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    padding: '6px 18px',
    width: '100%',
    color: theme.palette.lowEmphasis.main,
    fontWeight: theme.typography.fontWeightMedium
}));

const prodectDetailsButtons = [
    'Product Description',
    'Related Products',
    'Ratings and Reviews'
]

function Product({product}) {
    const discountedPrice = (product.price - (product.price * (product.discount / 100))).toFixed(2);
    const { categoryId } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [displayText, setDisplayText] = useState('Product Description');
    const [quantity, setQuantity] = useState(1);
    const buttonRef = useRef(null);
    const count = 5;
    const buttonContent = {
        'Product Description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.',
        'Related Products': relatedProducts,
        'Ratings and Reviews': 'Here are the ratings and reviews.',
    };

    const handleButtonClick = (text) => {
        setDisplayText(buttonContent[text]);
    };

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const result = await fetchData(`https://store-osn9.onrender.com/products/categories/${categoryId}`);
                if (count >= result.length) {
                    setRelatedProducts(result)
                } else {
                    const shuffledProducts = result.sort(() => 0.5 - Math.random());
                    return setRelatedProducts(shuffledProducts.slice(0, count));
                }

            } catch (error) {
                console.error(error);
            }
        }
        fetchDataAsync();
    }, [])

    return (
        <>
            <BreadCrumb MainTitle={'Home'} SubTitle={"Handbag"} ProductTitle={product.title} />
            <Box sx={{
                p: 2
            }}>


                <Box sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    gap: "1.5rem",
                    marginBottom: "4rem",

                }}>

                    <Box component={'img'} sx={{
                        height: {
                            xs: "100%",
                            sm: "47.266vw"
                        },
                        borderRadius: "1rem",
                        objectFit: "cover"
                    }} src='../assets/laura-chouette-Atomp7YdMaE-unsplash 1.png' />

                    <Box sx={{
                        width:"100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: {
                        xs:".7rem",
                        sm:"1rem"
                        }
                     
                    }}>

                        <Box>
                            <Typography sx={{
                                fontSize: {
                                    xs: "7vw",
                                    sm: "4vw",
                                  
                                },
                                color: "dark.main",
                                fontWeight: "fontWeightLabelSmall"
                            }}>
                                {product.title}
                            </Typography>
                            <Typography sx={{
                                fontSize: {
                                    xs: "4vw",
                                    sm: "1.6vw",
                                    lg: "2.5vw"
                                },
                                color: "lowEmphasis.main",
                                fontWeight: "fontWeightLabelSmall"
                            }}>
                                {product.description}
                            </Typography>
                        </Box>


                        <Box sx={{
                            display: "flex",
                            alignItems: 'center',
                            gap: "1rem",
                            width: "100%"
                        }}>
                            <Rating value={product.rating} name='Stars' defaultValue={0} precision={.1} size='large' readOnly/>
                            <Typography sx={{
                                fontSize: {
                                    xs:"4vw",
                                    sm: "2vw",
                                    lg:"1.25vw"
                                 
                                },
                                color: "lightText.main",
                                fontWeight: "fontWeightRegular"
                            }}>
                                {`(${product.rating_count}) Ratings`}
                            </Typography>
                        </Box>


                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem"
                        }}>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "5vw",
                                        sm: "4vw",
                                        lg:"3.125vw"
                                    },
                                    color: "dark.main",
                                    fontWeight: "fontWeightBold",

                                }}>
                               
                                {`$${discountedPrice}`}
                            </Typography>
                        
                            {product.discount > 0 ?
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: ".3rem",
                                    flexWrap: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap"
                                }}>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: "3.5vw",
                                            sm: "1.8vw",
  
                                        },
                                        color: "lowEmphasis.main",
                                        fontWeight: "fontWeightRegular",
                                        textDecoration: "line-through"
                                    }}
                                    >
                                        {`$${product.price}`}

                                    </Typography>
                                    <Typography sx={{
                                            fontSize: {
                                            xs: "3.5vw",
                                            sm: "1.8vw",
    
                                        },
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

                            <Box
                                sx={{
                                    display:"flex",
                                    alignItems:"center",
                                    gap:"1rem"
                                }}
                            >
                                <Typography
                                  sx={{
                                    fontSize: {
                                        xs: "4vw",
                                        sm: "3vw",
                                        lg: "2.5vw"
                                    },
                                    color: "dark.main",
                                    fontWeight: "fontWeightBold",

                                }}
                                >
                                    Quantity:
                                </Typography>
                            <Box sx={{
                                width:"7rem",
                                height:"2rem"
                            }}><Stepper Maxcount={product.quantity} setCount={setQuantity} count={quantity}/></Box>
                            </Box> 

                            <Box sx={{
                                height:"100%",
                                display:"flex",
                                alignItems:"center",
                                gap:{
                                    xs:".25rem",
                                    md:"1rem"
                                },
                                justifyContent:"space-between"
                            }}>
                            <Button variant="contained" fullWidth='true' startIcon={<WorkOutlineIcon/>}>
                                 <Typography sx={{
                                    fontWeight:"fontWeightLabelSmall",
                                    color:"bright.main",
                                    fontSize: {
                                        xs: "3vw",
                                        sm:"1.2vw",
                                        md:"1.5vw"
                                    },
                                }}>
                                Add to Bag
                                </Typography>
                            </Button>
                            <Button variant="outlined"  fullWidth='true' startIcon={<FavoriteBorderIcon/>}>
                                <Typography sx={{
                                    fontWeight:"fontWeightLabelSmall",
                                    color:"primary.main",
                                    fontSize: {
                                        xs: "3vw",
                                        sm:"1.2vw",
                                        md:"1.5vw"
                                    },
                                }}>
                                Add to Wishlist
                                </Typography>
                            </Button>
                            </Box>
                    </Box>
                </Box>

                <Grid container spacing={1} sx={{
                    backgroundColor: 'grey.main',
                    borderRadius: '12px',
                    px: 2,
                    pb: 1,
                    justifyContent: { xs: 'center', sm: 'start' }
                }}>
                    {prodectDetailsButtons.map((button, id) => {
                        return <Grid item xs={12} sm={4} md={3} lg={2} xl={1} key={id} sx={{
                            textAlign: 'center'
                        }}>
                            {button === 'Product Description' ? <StyledButton onClick={() => handleButtonClick(button)} ref={buttonRef} autoFocus>{button}</StyledButton> : <StyledButton onClick={() => handleButtonClick(button)}>{button}</StyledButton>}

                        </Grid>
                    })}
                </Grid>
                <Typography variant='body1' sx={{
                    fontSize: '16px',
                    py: 2.5,
                    color: 'lowEmphasis.main',
                    fontWeight: 'fontWeightMedium',
                    width: '88%'
                }}>
                    {typeof displayText === 'object' ?
                        <Box sx={{ flexGrow: 1, paddingInline: "1rem", marginBlock: "2rem" }} >
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12, lg: 15 }}>
                                {relatedProducts.map((product) => (
                                    <Grid item xs={2} sm={2} md={3} lg={3} key={product.id}>
                                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                                            <ProductCard product={product} isDetailed={true} />
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box> : displayText}
                </Typography>
            </Box>
        </>
    )
}

Product.propTypes = {
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
      }).isRequired
}
Product.defaultProps={
    product: dummyProduct
}

export default Product