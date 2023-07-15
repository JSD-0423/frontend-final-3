import { styled } from '@mui/material/styles';

export const StyledFooter = styled('footer')(({ theme }) => ({
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    // position: 'fixed',
    // bottom: '0',
    width: '100%'
}));