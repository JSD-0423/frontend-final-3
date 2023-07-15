import React, { useEffect } from 'react'
import { Slide } from '@mui/material'
import PropTypes from 'prop-types';

function AutoSlideContainer({ children }) {
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        setChecked((prev) => !prev)
        return () => {
            setChecked((prev) => !prev)
        }
    }, [])
    
    return (
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
            {children}
        </Slide>
    )
}


AutoSlideContainer.propTypes = {
    children: PropTypes.object.isRequired
}

export default AutoSlideContainer