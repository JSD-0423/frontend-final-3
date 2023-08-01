import React from 'react'
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


SingleTextCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
};

function SingleTextCard({ title, imageSrc }) {

    return (
        <Card sx={{
            width: "100%",
            position: "relative",
            borderRadius: "10px"
        }}>
            <CardMedia
                component="img"
                sx={{
                    height: { xs: "156px", lg: "280px" },
                    objectFit: 'contain'
                }}
                image={imageSrc}
                title={title}
            />
            <CardContent
                sx={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: { xs: "70%", lg: "80%" },
                    left: "-5px"
                }}
            >
                <Typography gutterBottom variant="body1" component="div" sx={{
                    fontSize: { xs: "1rem", lg: "1.5rem" },
                    fontWeight: "fontWeightBold"
                }}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SingleTextCard