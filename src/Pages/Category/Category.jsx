import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../Components/Cards/ProductCard/ProductCard';
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { fetchData } from "../../Services/network";
import { useSearchContext } from '../../hooks/useSearchContext';


function Category() {
    const { targetAPI, targetID } = useParams();
    const APIUrl = targetID ? `/products/${targetAPI}/${targetID}` : targetAPI === 'discount' ? '/products/' : `/products/${targetAPI}`;
    const [subTitle, setSubTitle] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // eslint-disable-next-line no-unused-vars
    const { keyword, setKeyword } = useSearchContext();



    let params = targetAPI === 'discount'
        ? { params: { 'discount': 15 } }
        : targetAPI === 'search' ? { params: { 'keyword': keyword } } : null;


    useEffect(() => {
        const fetchDataAsync = async () => {
            setLoading(true);
            try {
                const result = await fetchData(APIUrl, params);
                setProducts(result);
            } catch (error) {
                setError(error.message);
            }

            setSubTitle(products?.categoryName?.name || products?.brandName?.name || targetAPI)
            setLoading(false);
        }
        fetchDataAsync()

    }, [targetAPI, targetID, keyword])
    // console.log(typeof products.categoryName.name)
    return (
        <>

            <BreadCrumb MainTitle={"Home"} SubTitle={subTitle} />
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
                {subTitle}
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
            ) : products.length === 0 ?

                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", height: "20vh",
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
                        No Products Found
                    </Typography>
                </Box> : (

                    <Box sx={{ flexGrow: 1, paddingInline: "1rem", marginBlock: "2rem" }} >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12, lg: 15 }}>
                            {products.products ? products.products.map((product, i) => (
                                <Grid item xs={2} sm={2} md={3} lg={3} key={i}>
                                    <ProductCard product={product} isDetailed={true} />
                                </Grid>
                            )) : products.map((product, i) => (
                                <Grid item xs={2} sm={2} md={3} lg={3} key={i}>
                                    <ProductCard product={product} isDetailed={true} />
                                </Grid>))}
                        </Grid>
                    </Box>
                )}


        </>
    )
}


export default Category;