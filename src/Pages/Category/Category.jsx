import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../Components/Cards/ProductCard/ProductCard';
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { fetchData } from "../../Services/network";
import { useSearchContext } from '../../hooks/useSearchContext';
import { StatusHandler } from '../../Components/Common/StatusHandler/StatusHandler';
import { MobileSearchInput } from '../../Components/InputWithIcon/MobileSearchInput';
import Pagination from '../../Components/Pagination/Pagination';



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

                const result = await fetchData(APIUrl, params)

                if (targetAPI === 'search') {
                    setProducts(result);
                } else {
                    setProducts(result.products);
                }
                setSubTitle(result?.categoryName?.name || result?.brandName?.name || targetAPI)


            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        }
        fetchDataAsync()

    }, [targetAPI, targetID])

    useEffect(() => {
        const fetchDataAsync = async () => {
            setLoading(true);
            try {
                const result = await fetchData(APIUrl, { params: { 'keyword': keyword } })
                setProducts(result);
                setSubTitle(keyword)

            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        }
        fetchDataAsync()

    }, [keyword])
    return (
        <>
            <MobileSearchInput />
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
                <StatusHandler content={error} height='50vh' />
            ) : loading ? (
                <StatusHandler content='Loading...' height='50vh' />
            ) : products.length === 0 ?

                <StatusHandler content='No Products Found !' height='50vh' /> : (

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
            <Box sx={{
                marginLeft: "1rem",
                marginBlock: "2rem"
            }}>
                <Pagination />

            </Box>
        </>
    )
}


export default Category;