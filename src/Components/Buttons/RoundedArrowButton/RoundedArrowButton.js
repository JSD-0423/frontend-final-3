import { Button } from '@mui/material'
import React from 'react'
import EastRoundedIcon from '@mui/icons-material/East';
import { PropTypes } from 'prop-types';

function RoundedArrowButton({ color, backgroundColor, justifyContent }) {
    return (
        <Button aria-label="fingerprint" sx={{
            mb: 1.5,
            px: 0,
            justifyContent: justifyContent,
        }}>
            <EastRoundedIcon sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', xl:'3.25rem' },
                minWidth: 0,
                color: color,
                borderRadius: '50%',
                backgroundColor: backgroundColor,
                py: 1
            }} />
        </Button>
    )
}

RoundedArrowButton.propTypes = {
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired
}

export default RoundedArrowButton