import { Box, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

export function StatusHandler({ content, height }) {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", height: height,
            width: "100%"
        }}>
            <Typography
                sx={{
                    color: "primary.main",
                    fontSize: {
                        xs: '1rem',
                        sm: "2rem"
                    },
                    fontWeight: "fontWeightLabelSmall"
                }}
            >
                {content}
            </Typography>
        </Box>
    )
}

StatusHandler.propTypes = {
    content: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}