import { ListItem, ListItemText } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
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
                        fontSize: '16px',
                    }}
                />
            </Link> :
                <Link to={`/#${linkText}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                    <ListItemText
                        primary={linkText}
                        primaryTypographyProps={{
                            fontWeight: 'fontWeightMedium',
                            fontSize: '16px'
                        }}
                    />
                </Link>}
        </ListItem>
    )
}

NavigationLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    linkTo: PropTypes.any
}

export default NavigationLink