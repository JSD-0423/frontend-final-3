import { ListItem, ListItemText } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

function NavigationLink({ linkText }) {
    return (
        <ListItem sx={{
            padding: 0,
        }}>
            <ListItemText
                primary={linkText}
                primaryTypographyProps={{
                    fontWeight: 'fontWeightMedium',
                    fontSize: '16px'
                }}
            />
        </ListItem>
    )
}

NavigationLink.propTypes = {
    linkText: PropTypes.string.isRequired,
}

export default NavigationLink