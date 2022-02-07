import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [menuName, setMenuName] = useState('');

  const obj = {
    menuName: { value: menuName, set: setMenuName },
  };
  return (
    <Context.Provider value={ obj }>
      { children }
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContextProvider;
