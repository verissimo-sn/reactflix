import React from 'react';

import './styles.css';

const Footer = () => {
  return (
    <div className="credits" >
      <h4>
        Criado por <a rel="noopener noreferrer" href="https://github.com/verissimo-sn" target="_blank" style={{ color: '#B2B200' }}>Verissimo-sn </a> 
        inspirado na B7Web.
      </h4>
      <h4>Direitos de imagem para <a rel="noopener noreferrer" href="https://www.netflix.com" target="_blank" style={{ color: '#E50914' }}>NetFlix</a></h4>
      <h4>Dados utilizando api do <a rel="noopener noreferrer" href="https://www.themoviedb.org/" target="_blank" style={{ color: '#203354' }}>TMDB</a></h4>
    </div>
  );
}

export default Footer;