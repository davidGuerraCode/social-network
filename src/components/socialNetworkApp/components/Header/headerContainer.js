import React from 'react';
import Header from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = () => {
  return (
    <Header>
      <FontAwesomeIcon
        icon={faCamera}
        className="f4 light-gray-text-color"></FontAwesomeIcon>
      <div className="f3 secondary-text-color b logo">Durazno</div>
      <FontAwesomeIcon
        icon={faPaperPlane}
        className="f4 light-gray-text-color"></FontAwesomeIcon>
    </Header>
  );
};

export default HeaderContainer;
