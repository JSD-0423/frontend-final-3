import React, { createContext, useState} from "react";
import PropTypes from 'prop-types';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </SearchContext.Provider>
  );
};



SearchProvider.propTypes = {
    children: PropTypes.any
  
  }
export { SearchProvider,SearchContext };