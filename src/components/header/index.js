import React from 'react';

import Logo from '../../assets/graphics/cover.png';

import './styles.scss';

const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img alt="logo" src={Logo} />
        </div>
      </div>
    </header>
  );
};

export default Header;
