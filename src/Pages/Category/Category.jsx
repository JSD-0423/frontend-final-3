import React from 'react'
import { ProductCard } from '../../Components/Cards/ProductCard/ProductCard';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';


const products = [
    {

        id: '1',
        name: 'Grande',
        descripton: 'Leather Coach Bag with adjustable starps.',
        brand: 'Blossom Pouch',
        price: {
            current: '39.49',
            actual: "78.66",
            discountPercentage: '50'
        },
        rating: "4",
        totoalRatings: '43',

        imgUrl: '../Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
        fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

    }, {

        id: '2',
        name: 'Grande',
        descripton: 'Leather Coach Bag with adjustable starps.',
        brand: 'Blossom Pouch',
        price: {
            current: '39.49',
            actual: "78.66",
            discountPercentage: '50'
        },
        rating: "4",
        totoalRatings: '43',

        imgUrl: '../Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
        fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

    }, {

        id: '3',
        name: 'Grande',
        descripton: 'Leather Coach Bag with adjustable starps.',
        brand: 'Blossom Pouch',
        price: {
            current: '39.49',
            actual: "78.66",
            discountPercentage: '50'
        },
        rating: "4",
        totoalRatings: '43',

        imgUrl: '../Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
        fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

    }, {

        id: '4',
        name: 'Grande',
        descripton: 'Leather Coach Bag with adjustable starps.',
        brand: 'Blossom Pouch',
        price: {
            current: '39.49',
            actual: "78.66",
            discountPercentage: '50'
        },
        rating: "4.6",
        totoalRatings: '43',

        imgUrl: '../Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
        fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

    }, {

        id: '4',
        name: 'Grande',
        descripton: 'Leather Coach Bag with adjustable starps.',
        brand: 'Blossom Pouch',
        price: {
            current: '39.49',
            actual: "78.66",
            discountPercentage: '50'
        },
        rating: "4.5",
        totoalRatings: '43',

        imgUrl: '../Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
        fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

    },
    {

        id: '5',
        name: 'Grande',
        descripton: 'Leather Coach Bag with adjustable starps.',
        brand: 'Blossom Pouch',
        price: {
            current: '39.49',
            actual: "78.66",
            discountPercentage: '50'
        },
        rating: "4.5",
        totoalRatings: '43',

        imgUrl: '../Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
        fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

    }
];
function Category({ targetURL }) {
    const { category } = useParams();

    return (
        <>
            {console.log(targetURL)}
            {console.log(category)}
            <BreadCrumb MainTitle={"Home"} SubTitle={category} />
            <Box sx={{ flexGrow: 1, paddingInline: "1rem", marginBlock: "2rem" }} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12, lg: 15 }}>
                    {products.map((product) => (
                        <Grid item xs={2} sm={2} md={3} lg={3} key={product.id}>
                            <ProductCard product={product} isDetailed={true} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

Category.propTypes = {
    targetURL: PropTypes.string.isRequired,
    category: PropTypes.string
}

export default Category;