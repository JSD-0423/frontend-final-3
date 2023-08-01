import { Box } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { theme } from '../../Theme/Theme';
import { Typography } from '@mui/material';


export default function Stepper({ count, Maxcount, setCount }) {


    function AddOne() {
        if (count < Maxcount) {
            setCount(count + 1)
        }
    }
    function removeOne() {

        if (count > 1) {
            setCount(count - 1)

        }
    }

    return (
        <Box sx={{
            width: "100%",
            height:"100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid",
            borderColor: theme.palette.primary.main,
            borderRadius: ".3rem"
        }}>
            <IconButton onClick={AddOne} >
                <AddIcon sx={{
                    color: theme.palette.dark.main
                }} />
            </IconButton>
            <Typography
                sx={{

                    fontFamily: theme.typography.fontFamily
                }} >
                {count}
            </Typography>
            <IconButton onClick={removeOne}>
                <RemoveIcon sx={{
                    color: theme.palette.dark.main
                }} />
            </IconButton>
        </Box>
    )
}

Stepper.propTypes = {
    count: PropTypes.number.isRequired,
    Maxcount: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}