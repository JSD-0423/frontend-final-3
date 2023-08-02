import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import SingleTextCard from '../SingleTextCard/SingleTextCard';
import { Grid, Box, Typography } from '@mui/material';
import { fetchData } from '../../Services/network';
import { Link } from 'react-router-dom';

function HandPicked({ headLine }) {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDataAsync = async () => {
            setLoading(true);
            try {
                const result = await fetchData('/products/handpicked');
                setCollections(result);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        }
        fetchDataAsync()

    }, [])

    return (
        <Box id="Featured" sx={{
            p: 2,
            backgroundColor: "primary.main",
            width: '100%',
            height: 'auto'
        }}>
            <Typography mb={2} variant="body1" component="div" sx={{
                color: "bright.main",
                fontWeight: "fontWeightMedium",
                fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
            }}>
                {headLine}
            </Typography>
            {error ? (
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", height: "20vh",
                    width: "100%"
                }}>
                    <Typography
                        sx={{
                            color: "bright.main",
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
                    justifyContent: "center", height: "20vh",
                    alignItems: "center",
                    width: "100%"
                }}>
                    <Typography
                        sx={{
                            color: "bright.main",
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
            ) : (

                <Grid Grid container alignItems="center" mb={1} spacing={{ xs: 2, md: 3, lg: 4, xl: 8 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    {collections.length ? collections.map((collection) => {
                        return <Grid item xs={6} sm={4} md={3} lg={3} key={collection.id}>
                            <Link to={`/product/${collection.id}`} style={{ textDecoration: 'none' }} >
                                <SingleTextCard title={collection.title} imageSrc={collection.productImage[0].src} />
                            </Link>
                        </Grid>
                    }) :
                        <p>no collections found</p>}
                </Grid>)}
        </Box >
    )
}

HandPicked.propTypes = {
    headLine: PropTypes.string.isRequired,
};

export default HandPicked