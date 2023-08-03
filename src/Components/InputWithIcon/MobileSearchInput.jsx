import { Box } from '@mui/material'
import React from 'react'
import { InputWithIcon } from './InputWithIcon'
import { useMobileInputContext } from '../../hooks/useMobileSearchContext';




export function MobileSearchInput() {
    
    const { isInputVisible } = useMobileInputContext();

    return (
        <Box sx={{
            marginInline: "2rem",
            display: { xs: isInputVisible ? "block" : "none", sm: "none" },
        }}><InputWithIcon /></Box>
    )
}
