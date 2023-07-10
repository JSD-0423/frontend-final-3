import { ListItem, ListItemText } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

NavigationLink.propTypes = {
    linkText: PropTypes.string.isRequired,
}

function NavigationLink({ linkText }) {
    return (
        <ListItem sx={{
            padding: 0,
        }}>
            <ListItemText
                primary={linkText}
                fontWeight={'fontWeightMedium'}
                primaryTypographyProps={{
                    fontWeight: 'fontWeightMedium',
                    fontSize: '16px'
                }}
            />
        </ListItem>
    )
}

export default NavigationLink