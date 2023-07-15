import { Button, Card, Container, Typography } from '@mui/material'
import React from 'react'

function BannerCard() {
    return (
        <Card  align={'right'} sx={{
            background: 'url("./Assets/MakeUpStart.jpg") left no-repeat, url("./Assets/MakeUpCenter.jpg") center no-repeat, url("./Assets/MakeUpEnd.jpg") right no-repeat',
            width: '100%',
            backgroundSize: '20% 20% 40%',
        }}>
            <Container sx={{
                my: 4
            }}>
            <Typography variant='body1' my={1}>
                LifeStyle
            </Typography>
            <Typography variant='h4' sx={{
                maxWidth: '50%',
            }}>
                MakeUp Accessories from Top Brands
            </Typography>
            <Button sx={{
                display: {xs: 'block', sm: 'none'}
            }}>
                Click me
            </Button>
            </Container>
        </Card>
    )
}

export default BannerCard