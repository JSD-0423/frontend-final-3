import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './StyledInputWithIcon';

export const InputWithIcon=({placeholder})=> {
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
InputWithIcon.propTypes ={
  placeholder: PropTypes.string.isRequired,

}

InputWithIcon.defaultProps = {
  placeholder: 'Search Products or Brands...',

};
