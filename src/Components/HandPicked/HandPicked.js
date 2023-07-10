import React from 'react'
import PropTypes from 'prop-types';
import SingleTextCard from '../SingleTextCard/SingleTextCard';
import { Grid, Box, Typography } from '@mui/material';

HandPicked.propTypes = {
    headLine: PropTypes.string.isRequired,
    collections: PropTypes.array.isRequired
};

function HandPicked({ headLine, collections }) {

    return (
        <Box sx={{
            p: 2,
            backgroundColor: "primary.main"
        }}>
            <Typography mb={2} variant="body1" component="div" sx={{
                color: "bright.main",
                fontWeight: "fontWeightMedium",
                fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
            }}>
                {headLine}
            </Typography>

            <Grid container alignItems="center" mb={1} spacing={{ xs: 2, md: 3, lg: 4, xl: 8 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                {collections ? collections.map(collection => {
                    return <Grid item xs={6} sm={4} md={3} lg={3} key={collection.id}>
                        <SingleTextCard title={collection.title} imageSrc={collection.imageSrc} />
                    </Grid>
                }) :
                    <p>no data found</p>}
            </Grid>
        </Box>
    )
}

export default HandPicked