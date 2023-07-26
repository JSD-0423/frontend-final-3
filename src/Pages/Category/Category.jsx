import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../Components/Cards/ProductCard/ProductCard';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { fetchData } from "../../Services/network";

function Category() {
    const { targetAPI, targetID } = useParams();
    const [products, setProducts] = useState([]);
    const APIUrl = targetID? `https://store-osn9.onrender.com/products/${targetAPI}/${targetID}` : targetAPI? `https://store-osn9.onrender.com/products/${targetAPI}` :'https://store-osn9.onrender.com/products'; 

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const result = await fetchData(APIUrl, targetAPI? null : {params:{discount :15 }});
                setProducts(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchDataAsync();
    }, [])

    return (
        <div>
            <BreadCrumb MainTitle={"Home"} SubTitle={targetAPI} />
            <Box sx={{ flexGrow: 1, paddingInline: "1rem", marginBlock: "2rem" }} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12, lg: 15 }}>
                    {products.length ? products.map((product) => (
                        <Grid item xs={2} sm={2} md={3} lg={3} key={product.id}>
                            <ProductCard product={product} isDetailed={true} />
                        </Grid>
                    )) : 'No data found'}
                </Grid>
            </Box>
        </div>
    )
}

Category.propTypes = {
    targetURL: PropTypes.string.isRequired,
}

export default Category;