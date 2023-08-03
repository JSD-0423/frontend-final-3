import React, { createContext, useState} from "react";
import PropTypes from 'prop-types';

const MobileSearchContext = createContext();

const MobileSearchProvider = ({ children }) => {
    const [isInputVisible, setIsInputVisible] = useState(false);

    const toggleMobileInput = () => {

      setIsInputVisible((prevValue)=>!prevValue)
      console.log(isInputVisible);
    };

  return (
    <MobileSearchContext.Provider value={{isInputVisible, toggleMobileInput }}>
      {children}
    </MobileSearchContext.Provider>
  );
};



MobileSearchProvider.propTypes = {
    children: PropTypes.any
  
}

export { MobileSearchProvider,MobileSearchContext };