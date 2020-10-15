import React from 'react';
import './styles.css';

const FeaturedMovie = ({ item }) => {
  const movieDate = new Date(item.first_air_date);
  const movieGenres = [];

  for(let i in item.genres) {
    movieGenres.push(item.genres[i].name);
  }

  let description = item.overview;
  if(description.length > 200) {
    description = description.substring(0, 200) + '...';
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average}</div>
            <div className="featured--year">{movieDate.getFullYear()}</div>
            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a className="featured--watch-button" href={`/watch/${item.id}`}>▶ Assistir</a>
            <a className="featured--mylist-button" href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </div>
          <div className="featured--genres"><strong>Gêneros: </strong>{movieGenres.join(', ')}</div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie;