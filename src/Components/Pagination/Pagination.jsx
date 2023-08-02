import React from 'react';
import usePagination from '@mui/material/usePagination';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { theme } from '../../Theme/Theme';

const CustomButton = styled('button')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        padding: ".3rem .55rem"
    },
    [theme.breakpoints.up('sm')]: {
        padding: ".7rem 1.5rem"
    },
    borderRadius: '.3rem',
    border: "none"
}));


export default function Pagination({ count, setNumberOfPages }) {


    const handleChange = (value) => {
        setNumberOfPages(value);
    };

    const { items } = usePagination({
        count: count,
        siblingCount: 0,
        boundaryCount: 1

    });



    return (
        <Box sx={{
            backgroundColor: theme.palette.grey.main,
            borderRadius: "0.5rem",
            display: 'flex',
            alignItems: "center",
            gap: ".2rem",
            width: "fit-content"
        }}>

            {items.map(({ page, type, selected, ...item }, index) => {

                let children = null;
                if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                    children = '…';
                } else if (type === 'page') {
                    children = (
                        <CustomButton
                            onChange={() => { handleChange(page) }}
                            type="button"
                            style={{
                                color: selected ? theme.palette.bright.main : theme.palette.lowEmphasis.main,
                                backgroundColor: selected ? theme.palette.primary.main : theme.palette.grey.main,
                            }}
                            {...item}
                        >
                            {page}
                        </CustomButton>
                    );
                } else {
                    children = (
                        <CustomButton type="button" {...item}>
                            <Typography textTransform={"capitalize"}>
                                {type}
                            </Typography>
                        </CustomButton>
                    );
                }
                return <Box key={index}>{children}</Box>;
            })}
        </Box>
    );
}
Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    setNumberOfPages: PropTypes.func.isRequired
}

Pagination.defaultProps = {
    count: 10
}