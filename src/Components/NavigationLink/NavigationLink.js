import { ListItem, ListItemText } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';

function NavigationLink({ linkText }) {
    return (
        <ListItem sx={{
            padding: 0,
        }}>
                <ScrollLink to={linkText} smooth={true} duration={500} offset={-100} style={{ textDecoration: 'none' }}>
                <ListItemText
                    primary={linkText}
                    primaryTypographyProps={{
                        fontWeight: 'fontWeightMedium',
                        fontSize: '16px'
                    }}
                    />
                    </ScrollLink>
            </ListItem>
    )
}

NavigationLink.propTypes = {
    linkText: PropTypes.string.isRequired,
}

export default NavigationLink