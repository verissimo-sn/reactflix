import React from 'react';
import './styles.css';

const index = ({ item }) => {
  return (
    <section className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>

    </section>
  )
}

export default index;