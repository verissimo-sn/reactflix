import React, { useEffect, useState } from 'react';

import Tmdb from './services/api';

import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';

import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(()=>{
    const LoadData = async () => {
      let list = await Tmdb.getHomeList();

      setMovieList(list);

      let featured = list.filter(item => item.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (featured[0].items.results.length - 1));
      let chosen = featured[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeatureData(chosenInfo);
    }

    LoadData();
  }, []);

  return (
    <div className="index-page">

      {featureData && (
        <FeaturedMovie item={featureData}/>
      )}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>

        ))}
      </section>
    </div>
  );
}

export default App;
