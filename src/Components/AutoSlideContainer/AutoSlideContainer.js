import React from 'react'
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel'

function AutoSlideContainer({ children }) {
    return (
        <Carousel autoPlay={true} indicatorIconButtonProps={{
            style: {
                display: 'none'
            }
        }}>
            {children}
        </Carousel>
    )
}


AutoSlideContainer.propTypes = {
    children: PropTypes.array.isRequired
}

export default AutoSlideContainer