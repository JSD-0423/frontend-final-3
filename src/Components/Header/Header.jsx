import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
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
const dummyCategories = ['HandBags', 'Watches', 'Skincare', 'Jewllery', 'Apparels'];



export const Header = ({  categories }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="bright" elevation={0}>
        <Toolbar>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            <img src="./icons/logo.svg" alt="Coral logo" />
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
                <MenuItem key={category} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color={'primary'}>{category}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
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
            Home
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '1rem' }}>
            {categories.map((category) => (
              <Button
                key={category}
                sx={{ my: 2, color: 'primary.main', display: 'block', fontSize: '0.875rem', fontWeight: '500' }}
              >
                {category}
              </Button>
            ))}
          </Box>

          <InputWithIcon placeholder={'Search Products or Brands...'} />
          
          <Box sx={{ display: { xs: 'flex',sm:'none'} }}>
            <IconButton size="large" aria-label="show more" aria-haspopup="true" color="primary">
              <SearchIcon />
            </IconButton>
          </Box>


          <Box sx={{ display: { xs: 'flex'} }}>
            <IconButton size="large" aria-label="show more" aria-haspopup="true" color="primary">
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ display: { xs: 'flex'} }}>
            <IconButton size="large" aria-label="show more" aria-haspopup="true" >
              <img src="./icons/profile.svg" alt="Cart" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex'} }}>
            <IconButton size="large" aria-label="show more" aria-haspopup="true" >
            <img src="./icons/cart.svg" alt="Cart" />
            </IconButton>
          </Box>




        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes ={
    searchPlaceHolder: PropTypes.string.isRequired,
    categories:PropTypes.array.isRequired
}

Header.defaultProps = {
    searchPlaceHolder: 'Search Products or Brands...',
    categories: dummyCategories,
  };
