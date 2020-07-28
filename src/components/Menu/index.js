import React from 'react';
import Button from '../Button';
import Logo from '../../assets/img/Logo.png';

import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Emaflix logo"/>
      </a>

      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;