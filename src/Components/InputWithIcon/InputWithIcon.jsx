import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './StyledInputWithIcon';

export const InputWithIcon = ({ placeholder }) => {
  return (
    <Search sx={{
      display: {
        xs: 'none',
        sm: 'block'
      }
    }} >
      <SearchIconWrapper>
        <SearchIcon color='primary' />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{
          'aria-label': 'search', sx: {
            "&::placeholder": {
              fontSize: { sm: "1.7vw", md: "1vw", lg: ".8vw", xl: ".6vw" }
            }
          }
        }}
      />
    </Search>
  )
}
InputWithIcon.propTypes = {
  placeholder: PropTypes.string.isRequired,

}

InputWithIcon.defaultProps = {
  placeholder: 'Search Products or Brands...',

};
