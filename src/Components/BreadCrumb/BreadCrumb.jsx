import { Box, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function BreadCrumb({ MainTitle, SubTitle, ProductTitle, SubTitleRoute }) {
    return (
        <Box sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingInline: "1rem",
            marginBlock: "1rem"
        }}>

            <Link to={'/'}>
                <Typography variant='h1' sx={{
                    fontSize: "1rem",
                    color: "primary.main",
                    fontWeight: "fontWeightMedium"
                }}>
                    {MainTitle}

                </Typography>
            </Link>
            <NavigateNextIcon sx={{
                fontSize: "1.5rem"
            }} />

            {ProductTitle ?
                <>
                    <Link to={SubTitleRoute}><Typography
                        sx={{
                            fontSize: "1rem",
                            color: "primary.main",
                            textTransform: "Capitalize",
                            fontWeight: "fontWeightMedium"

                        }}
                    >{SubTitle}</Typography></Link>
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
    SubTitleRoute:PropTypes.string,
    ProductTitle: PropTypes.string
}