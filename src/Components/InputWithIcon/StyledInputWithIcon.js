
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontSize:"1rem",
    color: theme.palette.lowEmphasis.main,
    "& .placeholder":{
      color: theme.palette.lowEmphasis.main,
    },
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      
    },
  }));

 export  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey.main,
    '&:hover': {
      backgroundColor:theme.palette.lightText.main,
    },
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  