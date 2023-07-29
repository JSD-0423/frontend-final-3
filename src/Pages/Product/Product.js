import React, { useState, useRef, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProductCard } from '../../Components/Cards/ProductCard/ProductCard';
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../Services/network";


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
    const { categoryId } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [displayText, setDisplayText] = useState('Product Description');
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
        <Box sx={{
            p: 2
        }}>
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
    )
}

export default Product