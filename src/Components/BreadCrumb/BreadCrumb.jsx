import { Box, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PropTypes from 'prop-types';

export default function BreadCrumb({ MainTitle, SubTitle, ProductTitle }) {
    return (
        <Box sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingInline:"1rem"
        }}>

            <Typography variant='h1' sx={{
                fontSize: "1rem",
                color: "primary.main",
                fontWeight: "fontWeightMedium"
            }}>
                {MainTitle}

            </Typography>
            <NavigateNextIcon sx={{
                fontSize: "1.5rem"
            }} />

            {ProductTitle ?
                <>
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            color: "primary.main",
                            textTransform: "Capitalize",
                            fontWeight: "fontWeightMedium"

                        }}
                    >{SubTitle}</Typography>
                    <NavigateNextIcon sx={{
                        fontSize: "1.5rem"
                    }} />

                    <Typography sx={{
                        fontSize: "1rem",
                        color: "lowEmphasis.main",
                        textTransform: "Capitalize",
                        fontWeight: "fontWeightMedium"


                    }}>{ProductTitle}</Typography>

                </> : <Typography
                    sx={{
                        fontSize: "1rem",
                        color: "lowEmphasis.main",
                        textTransform: "Capitalize",
                        fontWeight: "fontWeightMedium"

                    }}
                >{SubTitle}</Typography>
            }

        </Box>
    )
}

BreadCrumb.propTypes = {
    MainTitle: PropTypes.string,
    SubTitle: PropTypes.string,
    ProductTitle: PropTypes.string
}