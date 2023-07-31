import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@mui/material';
import { StyledFooter } from './StyledFooter';
import NavigationList from '../NavigationList/NavigationList';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TextWithIcon from '../TextWithIcon/TextWithIcon';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import InstaIcon from '../InstaIcon/InstaIcon';
import FacebookIcon from '../FacebookIcon/FacebookIcon';
import TwitterIcon from '../TwitterIcon/TwitterIcon';
import YoutubeIcon from '../YoutubeIcon/YoutubeIcon';

const categories = { listMainText: 'Shop By Category', list: ['HandBags', 'Watches', 'Skincare', 'Jewllery', 'Apparels', 'HandBags', 'Watches'] };
const products = { listMainText: 'Shop By Product', list: ['Featured', 'Brands', 'Trendy'] };
const socialMedia = [{ Icon: FacebookIcon, Link: 'www.facebook.com' }, { Icon: InstaIcon, Link: 'www.instagram.com' }, { Icon: TwitterIcon, Link: 'www.twitter.com' }, { Icon: YoutubeIcon, Link: 'www.youtube.com' }]

function Footer({ location, rights, categories, products, socialMedia }) {

    return (
        <StyledFooter>
            <Grid container spacing={2} px={6} py={3}>
                <Grid item xs={12} sm={2} sx={{
                    display: { xs: 'flex', sm: 'block' },
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Typography variant="body1" align="left" sx={{
                        color: 'bright.main'
                    }}>
                        {categories.listMainText}
                    </Typography>
                    <NavigationList ListItems={categories.list} />
                </Grid>
                <Grid item xs={12} sm={2} sx={{
                    display: { xs: 'flex', sm: 'block' },
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Typography variant="body1" align="left" sx={{
                        color: 'bright.main'
                    }}>
                        {products.listMainText}
                    </Typography>
                    <NavigationList ListItems={products.list} />
                </Grid>
                <Grid item xs={12} sm={8} sx={{
                    display: 'flex',
                    alignItems: { xs: 'center', sm: 'end' },
                    flexDirection: 'column'
                }} >
                    <SocialMediaLinks socialMedia={socialMedia} />
                    <TextWithIcon text={location} IconComponent={LocationOnOutlinedIcon} width={'100%'} />
                    <Typography variant="body1"sx={{
                        color: 'lightText.main',
                        fontWeight: 'fontWeightMedium',
                        fontSize: '14px',
                        textAlign:{xs: 'center', sm: 'right'}
                    }}>
                        {rights}
                    </Typography>
                </Grid>
            </Grid>
        </StyledFooter>
    );
}


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


export default Footer