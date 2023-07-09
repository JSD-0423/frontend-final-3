import { ListItem, ListItemText } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

NavigationLink.propTypes = {
    linkText: PropTypes.string.isRequired,
}

function NavigationLink({linkText}) {
    return (
        <ListItem>
            <ListItemText
                primary={linkText}
            />
        </ListItem>
    )
}

export default NavigationLink