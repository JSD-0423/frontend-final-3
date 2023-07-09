import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

TextWithIcon.propTypes = {
    location: PropTypes.string.isRequired,
    LocationOnOutlinedIcon: PropTypes.object.isRequired,
}

function TextWithIcon({ location, LocationOnOutlinedIcon }) {
    return (
        <Typography>
            <LocationOnOutlinedIcon />
            {location}
        </Typography>
    )
}

export default TextWithIcon