import { useState, useEffect, useRef } from 'react';
import { BASE_URL } from '../utils/constants';

function useOMDbSearch(search) {
  const cache = useRef({});
  const url = `${BASE_URL}&s=${search}`;
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

export default useOMDbSearch;