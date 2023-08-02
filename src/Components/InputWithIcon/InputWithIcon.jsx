import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './StyledInputWithIcon';
import { useNavigate } from "react-router-dom";
import { useSearchContext } from '../../hooks/useSearchContext';

export const InputWithIcon = ({ placeholder }) => {

  // eslint-disable-next-line no-unused-vars
  const { keyword, setKeyword } = useSearchContext();

  const navigate = useNavigate();

  const handleChange = (event) => {
    let inputValue = event.target.value;
    if (event.key === "Enter" && inputValue !== '') {
      setKeyword(encodeURIComponent(inputValue))
      navigate('/products/search')

    }
  };
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
        onKeyDown={handleChange}
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
