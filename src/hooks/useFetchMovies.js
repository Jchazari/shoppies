import { useState, useEffect, useRef } from 'react'

function useFetchMovies(search) {
  const cache = useRef({});
  const url = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!search) {
      setMovies([]);
      setStatus('idle');
      return;
    }

    async function fetchMovies() {
      setMovies([]);
      setStatus('loading');

      if (cache.current[url]) {
        setMovies(cache.current[url]);
        setStatus('success');
      } else {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
          const data = await response.json();
          if (data.Error) {
            setStatus('error');
            return;
          }
          
          cache.current[url] = data.Search;

          setMovies(data.Search);
          setStatus('success');
        } catch (error) {
          setStatus('idle');
          alert(error.message);
        }
      }
    }

    fetchMovies();
    
  // eslint-disable-next-line
  }, [search]);

  return { movies, status };
}

export default useFetchMovies;