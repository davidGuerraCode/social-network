import React from 'react';

const Header = ({ children }) => {
  return (
    <div className="flex justify-between items-center pa3">{children}</div>
  );
};

export default Header;
