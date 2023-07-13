import React from 'react'
import { List} from '@mui/material';
import NavigationLink from '../NavigationLink/NavigationLink';
import PropTypes from 'prop-types';

function NavigationList({ ListItems }) {
    
    return (
        <List dense={true} sx={{
            p: 0,
            color: 'lightText.main',
            marginTop: '5px'
        }}>
            {ListItems.length? ListItems.map((navLink, i) =>{
                return <NavigationLink key={i} linkText={navLink}/>
            }): null }
        </List>
    )
}

NavigationList.propTypes = {
    ListItems: PropTypes.array.isRequired,
}

export default NavigationList