import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled('button')(({ theme }) => ({
    ":focus": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.bright.main
    },
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    padding: '6px 18px',
    color: theme.palette.lowEmphasis.main,
    fontWeight: theme.typography.fontWeightMedium
}));

function Product() {
    const [displayText, setDisplayText] = useState('Product Description');

    // Define the content to be displayed when each button is clicked
    const buttonContent = {
        'Product Description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.',
        'Related Products': 'These are some related products.',
        'Ratings and Reviews': 'Here are the ratings and reviews.',
    };

    // Function to handle button click and update the displayed text
    const handleButtonClick = (text) => {
        setDisplayText(buttonContent[text]);
    };
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
                <Grid item lg={2}>
                    <StyledButton onClick={() => handleButtonClick('Product Description')}>Product Description</StyledButton>
                </Grid>
                <Grid item lg={2}>
                    <StyledButton onClick={() => handleButtonClick('Related Products')}>Related Products</StyledButton>
                </Grid>
                <Grid item lg={2}>
                    <StyledButton onClick={() => handleButtonClick('Ratings and Reviews')}>Ratings and Reviews</StyledButton>
                </Grid>
            </Grid>
            <Typography variant='body1' sx={{
                fontSize: '16px',
                py: 2.5,
                color: 'lowEmphasis.main',
                fontWeight: 'fontWeightMedium',
                width: '88%'
            }}>{displayText}</Typography>
        </Box>
    )
}

export default Product