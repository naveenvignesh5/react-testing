import React from 'react';

import Logo from '../../assets/graphics/cover.png';

import './styles.scss';

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoImg" alt="logo" src={Logo} />
        </div>
      </div>
    </header>
  );
};

export default Header;
