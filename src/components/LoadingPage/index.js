import React from 'react';

import Loading from '../../assets/loading.gif';

import './styles.css';

const LoadingPage = () => {
  return (
    <div className="loading">
      <img src={Loading} alt="ReactFlix"/>
      
      {/* <img 
        src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/Netflix_LoadTime-scaled.gif" 
        alt="ReactFlix"/> */}
    </div>
  );
}

export default LoadingPage;