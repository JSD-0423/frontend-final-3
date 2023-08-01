import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { InputWithIcon } from '../InputWithIcon/InputWithIcon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
const categories = [{
  "id": 1,
  "name": "Phones",
},
{
  "id": 2,
  "name": "Laptops",
},
{
  "id": 3,
  "name": "Mobile accessories",
},
{
  "id": 4,
  "name": "Tablets",
},
{
  "id": 5,
  "name": "Shoes",
},
{
  "id": 6,
  "name": "T-shirts",
}];



export const Header = ({ pageTitle }) => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (

    <Box component={"header"} sx={{
      display: "flex",
      alignItems: "center",
      paddingInline: {
        xs: ".5rem",
        sm: "1rem"
      },
      paddingBlock: {
        xs: ".6rem",
        md: "0.5rem"
      }
    }}>

      <Box
        component={Link}
        to={'/'}
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      >
        <img src="/icons/logo.svg" alt="Coral logo" />
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="primary"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} onClick={handleCloseNavMenu} component={Link} to={`/products/categories/${category.id}`}>
              <Typography textAlign="center" color={'primary.main'}>{category.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {pageTitle ? <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          display: { xs: 'block', sm: 'none' },
          width: '100%',
          fontWeight: 'bold',
          color: 'primary.main',
        }}
      >
        {pageTitle}
      </Typography> : null}


      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '1rem' }}>
        {categories.map((category) => (

          <Button
            key={category.id}
            component={Link}
            to={`/products/categories/${category.id}`}
            sx={{
              color: 'primary.main',
              display: 'block',
              fontSize: '1vw',
              fontWeight: 'fontWeightMedium',
              textTransform: "none",
              paddingBlock: 0
            }}
          >
            {category.name}
          </Button>

        ))}
      </Box>

      <InputWithIcon placeholder={'Search Products or Brands...'} />

      <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <IconButton size="large" aria-label="show more" aria-haspopup="true" color="primary">
          <SearchIcon />
        </IconButton>
      </Box>


      <Box sx={{ display: { xs: 'flex' } }}>
        <IconButton size="large" aria-label="show more" aria-haspopup="true" color="primary">
          <FavoriteBorderIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: { xs: 'flex' } }}>
        <IconButton size="large" aria-label="show more" aria-haspopup="true" >
          <img src="/icons/profile.svg" alt="Cart" />
        </IconButton>
      </Box>

      <Box sx={{ display: { xs: 'flex' } }}>
        <IconButton size="large" aria-label="show more" aria-haspopup="true" >
          <img src="/icons/cart.svg" alt="Cart" />
        </IconButton>
      </Box>

    </Box>

  );
}

Header.propTypes = {
  pageTitle: PropTypes.string,
}

