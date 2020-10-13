import React, { useEffect, useState } from 'react';

import Tmdb from './services/api';

import NavBar from './components/NavBar';
import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [flutuante, setFlutuante] = useState(false)

  useEffect(()=>{
    const LoadData = async () => {
      let list = await Tmdb.getHomeList();

      setMovieList(list);

      let featured = list.filter(item => item.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (featured[0].items.results.length - 1));
      let chosen = featured[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    }

    LoadData();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 20) {
        setFlutuante(true);
      }else {
        setFlutuante(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="index-page">
      <NavBar flutuante={flutuante}/>

      {featuredData && (
        <FeaturedMovie item={featuredData}/>
      )}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>

        ))}
      </section>

      <Footer />
    </div>
  );
}

export default App;
