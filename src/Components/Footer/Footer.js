import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@mui/material';
import { StyledFooter } from './StyledFooter';
import { theme } from '../../Theme/Theme';
import NavigationList from '../NavigationList/NavigationList';
const categories = { listMainText: 'Shope By Category', list: ['HandBags', 'Watches', 'Skincare', 'Jewllery', 'Apparels', 'HandBags', 'Watches', 'Skincare', 'Jewllery', 'Apparels'] };
const products = { listMainText: 'Shope By Product', list: ['HandBags', 'Watches', 'Skincare', 'Jewllery', 'Apparels', 'HandBags', 'Watches', 'Skincare', 'Jewllery', 'Apparels'] };
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TextWithIcon from '../TextWithIcon/TextWithIcon';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

const socialMedia = [{Icon: FacebookOutlinedIcon , Link:'www.facebook.com'}, {Icon: FacebookOutlinedIcon , Link:'www.facebook.com'}, {Icon: FacebookOutlinedIcon , Link:'www.facebook.com'},{Icon: FacebookOutlinedIcon , Link:'www.facebook.com'}]

Footer.propTypes = {
    categories: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
    location: PropTypes.string.isRequired,
    rights: PropTypes.string.isRequired,
    socialMedia: PropTypes.array.isRequired,
}

Footer.defaultProps = {
    categories: categories,
    products: products,
    location: 'United Sates',
    rights: '© 2021 | Cora Leviene All Rights Reserved',
    socialMedia: socialMedia
};

function Footer({ location, rights, categories, products, socialMedia }) {

    return (
        <StyledFooter theme={theme}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                    <Typography variant="body1" align="left" sx={{
                        color: 'bright.main'
                    }}>
                        {categories.listMainText}
                    </Typography>
                    <NavigationList ListItems={categories.list} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="body1" align="left" sx={{
                        color: 'bright.main'
                    }}>
                        {products.listMainText}
                    </Typography>
                    <NavigationList ListItems={products.list} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <SocialMediaLinks socialMedia={socialMedia}/>
                    <Typography variant="body1" align="right">
                        <TextWithIcon location={location} LocationOnOutlinedIcon={LocationOnOutlinedIcon}/>
                    </Typography>
                    <Typography variant="body1" align="right">
                        {rights}
                    </Typography>
                </Grid>
            </Grid>
        </StyledFooter>
    );
}

export default Footer