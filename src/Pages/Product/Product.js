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
import { StatusHandler } from '../../Components/Common/StatusHandler/StatusHandler';
import { MobileSearchInput } from '../../Components/InputWithIcon/MobileSearchInput';




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

function Product() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [subTitle, setSubTitle] = useState("");
    const [subTitleRoute, setSubTitleRoute] = useState("");
    const [error, setError] = useState('');
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [productDesc, setProductDesc] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [quantity, setQuantity] = useState(1);
    const buttonRef = useRef(null);
    const count = 5;
    const buttonContent = {
        'Product Description': productDesc,
        'Related Products': relatedProducts,
        'Ratings and Reviews': 'Here are the ratings and reviews.',
    };

    const handleButtonClick = (text) => {
        setDisplayText(buttonContent[text]);
    };



    useEffect(() => {
        const fetchDataAsync = async () => {
            setLoading(true);
            try {
                const prodcutResponse = await fetchData(`/product/${productId}`);
                if(prodcutResponse){
                setProduct(prodcutResponse)
                setDisplayText(prodcutResponse.description);
                setProductDesc(prodcutResponse.description)
                const result = await fetchData(`/products/categories/${prodcutResponse.category_id}`);
                setSubTitleRoute(`/products/categories/${prodcutResponse.category_id}`)
                setSubTitle(result.categoryName.name)
                
                if (count >= result.products.length) {
                    setRelatedProducts(result.products)
                } else {
                    const shuffledProducts = result.products.sort(() => 0.5 - Math.random());
                    setRelatedProducts(shuffledProducts.slice(0, count));
                }}
            } catch (error) {
                setError(error.message);
            }

            setLoading(false);

        }

        fetchDataAsync()
    }, [productId])

    return (
        <>
            {error ? (
                <StatusHandler content={error} height='50vh' />
            ) : loading ? (
                <StatusHandler content="Loading ..." height='50vh' />
            ) : product===null?
                <StatusHandler content="No Products Found" height='50vh' />
                :
                <>
                <MobileSearchInput/>
                    <BreadCrumb MainTitle={'Home'} SubTitle={subTitle} ProductTitle={product.title} SubTitleRoute={subTitleRoute} />
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
                                objectFit: "cover",
                                aspectRatio: "1/1"
                            }} src={product.productImage[0].src} alt={product.productImage[0].alt} />

                            <Box sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: {
                                    xs: ".7rem",
                                    sm: "1rem"
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
                                            sm: "2vw",
                                            md: "1.6vw"

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
                                    <Rating value={product.rating} name='Stars' defaultValue={0} precision={.1} size='large' readOnly />
                                    <Typography sx={{
                                        fontSize: {
                                            xs: "4vw",
                                            sm: "2vw",
                                            lg: "1.25vw"

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
                                                lg: "3.125vw"
                                            },
                                            color: "dark.main",
                                            fontWeight: "fontWeightBold",

                                        }}>

                                        {`$${(product.price - (product.price * (product.discount / 100))).toFixed(2)}`}
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
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem"
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
                                        width: "7rem",
                                        height: "2rem"
                                    }}><Stepper Maxcount={product.quantity} setCount={setQuantity} count={quantity} /></Box>
                                </Box>

                                <Box sx={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: {
                                        xs: ".25rem",
                                        md: "1rem"
                                    },
                                    justifyContent: "space-between"
                                }}>
                                    <Button variant="contained" fullWidth='true' startIcon={<WorkOutlineIcon />}>
                                        <Typography sx={{
                                            fontWeight: "fontWeightLabelSmall",
                                            color: "bright.main",
                                            fontSize: {
                                                xs: "3vw",
                                                sm: "1.2vw",
                                                md: "1.5vw"
                                            },
                                        }}>
                                            Add to Bag
                                        </Typography>
                                    </Button>
                                    <Button variant="outlined" fullWidth='true' startIcon={<FavoriteBorderIcon />}>
                                        <Typography sx={{
                                            fontWeight: "fontWeightLabelSmall",
                                            color: "primary.main",
                                            fontSize: {
                                                xs: "3vw",
                                                sm: "1.2vw",
                                                md: "1.5vw"
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
            }
        </>
    )
}

Product.propTypes = {
    productID: PropTypes.number.isRequired
}

export default Product