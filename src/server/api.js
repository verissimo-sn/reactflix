const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e80f88cfb4d76d8a758342b2afa8cab9';

const basicFetch = async (endpoint) => {
  const request = await fetch(`${API_BASE_URL}${endpoint}`);
  const json = await request.json();

  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items:  await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items:  await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items:  await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items:  await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items:  await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
      },
    ]
  }
}
  