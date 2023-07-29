import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../Components/Cards/ProductCard/ProductCard';
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { fetchData } from "../../Services/network";




function Category() {
    const { targetAPI } = useParams();
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');



    useEffect(() => {
        const fetchDataAsync = async () => {
            setLoading(true);
            try {
                const result = await fetchData(`/products/${targetAPI}`);
                setProducts(result);
                setLoading(false);

            } catch (error) {
                setLoading(false)
                setError(error.message);
            }
        }
        fetchDataAsync()

    }, [])

    return (
        <>

            <BreadCrumb MainTitle={"Home"} SubTitle={targetAPI} />
            <Typography sx={{
                fontSize: {
                    xs: "1.5rem",
                    sm: "1.7rem",
                    md: "2.125rem"
                },
                color: "primary.main",
                fontWeight: "fontWeightLabelSmall",
                paddingInline: "1rem",
                textTransform: "Capitalize",
            }}>
                {targetAPI}
            </Typography>

            {error ? (
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", height: "50vh",
                    width: "100%"
                }}>
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontSize: {
                                xs: '1rem',
                                sm: "2rem"
                            },
                            fontWeight: "fontWeightLabelSmall"
                        }}
                    >
                        {error}
                    </Typography></Box>
            ) : loading ? (
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", height: "50vh",
                    width: "100%"
                }}>
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontSize: {
                                xs: '1rem',
                                sm: "2rem"
                            },
                            fontWeight: "fontWeightLabelSmall"
                        }}
                    >
                        Loading...
                    </Typography>
                </Box>
            ) : products.length === 0 ? <Typography
                sx={{
                    color: "primary.main",
                    fontSize: {
                        xs: '1rem',
                        sm: "2rem"
                    },
                    fontWeight: "fontWeightLabelSmall"
                }}
            >
                No Products Found
            </Typography> : (

                <Box sx={{ flexGrow: 1, paddingInline: "1rem", marginBlock: "2rem" }} >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12, lg: 15 }}>
                        {products.map((product) => (
                            <Grid item xs={2} sm={2} md={3} lg={3} key={product.id}>
                                <ProductCard product={product} isDetailed={true} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}


        </>
    )
}



export default Category;