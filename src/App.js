import React, { useEffect } from 'react';
import './App.css';

import Tmdb from './server/api';

function App() {

  useEffect(()=>{
    const LoadData = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
    }

    LoadData();
  }, []);

  return (
    <>
      <h1>ReactFlix</h1>
    </>
  );
}

export default App;
