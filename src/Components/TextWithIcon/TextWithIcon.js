import {  Grid, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

function TextWithIcon({ text, IconComponent }) {
    return (
        <Grid container spacing={1} sx={{
            display: 'flex',
            justifyContent: {xs: 'center', sm: 'end'}
          }}>
            <Grid item xs={'auto'}>
                <IconComponent sx={{
                    color: 'bright.main',
                    fontSize: '24px',
                }} />
            </Grid>
            <Grid item xs={'auto'}>
                <Typography variant="body1" align="right"sx={{
                    color: 'bright.main',
                    fontWeight: 'fontWeightMedium',
                    fontSize: '14px'
                }}>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    )
}

TextWithIcon.propTypes = {
    text: PropTypes.string.isRequired,
    IconComponent: PropTypes.object.isRequired,
}

export default TextWithIcon