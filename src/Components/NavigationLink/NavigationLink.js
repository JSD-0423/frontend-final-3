import { ListItem, ListItemText } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

function NavigationLink({ linkText, linkTo }) {
    return (
        <ListItem sx={{
            padding: 0,
        }}>
            {linkTo ? <Link to={`/products/categories/${linkTo}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText
                    primary={linkText}
                    primaryTypographyProps={{
                        fontWeight: 'fontWeightMedium',
                        fontSize: '16px'
                    }}
                />
            </Link> :
                <ScrollLink to={linkText} smooth={true} duration={500} offset={-100} style={{ textDecoration: 'none' }}>
                    <ListItemText
                        primary={linkText}
                        primaryTypographyProps={{
                            fontWeight: 'fontWeightMedium',
                            fontSize: '16px'
                        }}
                    />
                </ScrollLink>}
        </ListItem>
    )
}

NavigationLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    linkTo: PropTypes.any
}

export default NavigationLink