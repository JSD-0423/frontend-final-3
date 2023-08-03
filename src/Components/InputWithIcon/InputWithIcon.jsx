import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './StyledInputWithIcon';
import { useNavigate } from "react-router-dom";
import { useSearchContext } from '../../hooks/useSearchContext';

export const InputWithIcon = ({ placeholder }) => {

  const { keyword, setKeyword } = useSearchContext();

  const navigate = useNavigate();

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setKeyword(encodeURIComponent(inputValue))

  };

  const handleEnter = (event) => {
    if (event.key === "Enter" && keyword) {
      navigate('/products/search')
    }
  }
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
              fontSize: { sm: ".8rem", md: ".9rem", lg: "1rem" }
            }
          }
        }}
        value={keyword}
        onChange={handleChange}
        onKeyDown={handleEnter}
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
