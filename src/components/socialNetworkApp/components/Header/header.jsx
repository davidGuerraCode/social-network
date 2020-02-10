import React from 'react';

const Header = ({ children }) => {
  return (
    <div className="flex justify-around items-center pa3 bb b--light-silver">
      {children}
    </div>
  );
};

export default Header;
