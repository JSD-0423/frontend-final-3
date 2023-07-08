import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './StyledInputWithIcon';


// eslint-disable-next-line react/prop-types
export function InputWithIcon({placeholder}) {
    return (
        <Search sx={{
            display:{
                xs:'none',
                sm:'block'
            }
        }} >
        <SearchIconWrapper>
          <SearchIcon color='primary'/>
        </SearchIconWrapper>
        <StyledInputBase
           placeholder={placeholder}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    )
}