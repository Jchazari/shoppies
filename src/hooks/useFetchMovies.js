import { useState, useEffect, useRef } from 'react'
import { BASE_URL } from '../constants';

function useFetchMovies(search) {
  const cache = useRef({});
  const url = `${BASE_URL}&s=${search}&type=movie`
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!search) {
      setInitialStates();
      return;
    }

    async function fetchMovies() {
      setInitialStates();
      setIsLoading(true);

      if (cache.current[url]) {
        setMovies(cache.current[url]);
      } else {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
          const data = await response.json();
          if (data.Error) setIsError(true);
          
          cache.current[url] = data.Search;
          setMovies(data.Search);
        } catch (error) {
          alert(error.message);
        }
      }

      setIsLoading(false);
    }

    fetchMovies();
  }, [search]);

  function setInitialStates() {
    setMovies([]);
    setIsError(false);
  }

  return { movies, isLoading, isError };
}

export default useFetchMovies;