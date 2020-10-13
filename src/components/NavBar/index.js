import React from 'react';

import ReactLogo from '../../assets/react-logo.png';
import NetflixLogo from '../../assets/netflix-logo.png';
import AvatarLogo from '../../assets/avatar-logo.png';

import './styles.css';

const NavBar = ({ flutuante }) => {
  return (
    <div className={flutuante ? 'navbar flutuante' : 'navbar' }>
      <div className="navbar--logo">
        <img className="navbar--logo-react" src={ReactLogo} alt="ReactFlix"/>
        <img className="navbar--logo-netflix" src={NetflixLogo} alt="ReactFlix"/>
      </div>
      <div className="navbar--user">
        <a href="/">
          <img src={AvatarLogo} alt="ReactFlix avatar"/>
        </a>
      </div>
    </div>
  );
}

export default NavBar;