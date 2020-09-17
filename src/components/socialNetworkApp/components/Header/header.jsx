import React from 'react';

const Header = ({ children }) => {
  // This component is just for render the information received by props.
  return (
    <header className="flex justify-between items-center pa3 shadow-4 bb b--light-silver">
      {children}
    </header>
  );
};

export default Header;
