import React, { useEffect, useState } from 'react';

import Tmdb from './services/api';

import MovieRow from './components/MovieRow';

import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const LoadData = async () => {
      let list = await Tmdb.getHomeList();

      setMovieList(list);
    }

    LoadData();
  }, []);

  return (
    <div className="index-page">
      <section className="linsts">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>

        ))}
      </section>
    </div>
  );
}

export default App;
