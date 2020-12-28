import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BASE_URL } from './constants';
import useDebounce from './hooks/useDebounce';
import Container from './components/Container';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Nominees from './components/Nominees';
import MovieCard from './components/MovieCard';
import Skeleton from './components/Skeleton';
import InputGroup from './components/InputGroup';
import Input from './components/Input';
import Button from './components/Button';

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 16px 0;
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const searchTerm = useDebounce(search, 500);

  const [nominatedMovies, setNominatedMovies] = useState([]);

  useEffect(() => {
    async function onSearch() {
      cleanup();
      setIsLoading(true);

      try {
        const movies = await fetchMovies(searchTerm);
        setMovies(movies);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (searchTerm) {
      onSearch();
    } else {
      cleanup();
    }
  }, [searchTerm]);

  async function fetchMovies(searchTerm) {
    const res = await fetch(`${BASE_URL}&s=${searchTerm}&type=movie`);
    const data = await res.json();
  
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    if (data.Error) throw new Error(data.Error);
  
    return data.Search;
  }

  function cleanup() {
    setMovies([]);
    setIsError(false);
  }

  function nominateMovie(movie) {
    setNominatedMovies([...nominatedMovies, movie]);
  }

  function unNominateMovie(movie) {
    const nominatedMoviesCopy = nominatedMovies.filter(mov => mov !== movie);
    setNominatedMovies(nominatedMoviesCopy);
  }

  function isNominated(movie) {
    return nominatedMovies.some(mov => mov.imdbID === movie.imdbID);
  }

  function renderSkeletons() {
    return [...Array(6)].map((s, i) => <Skeleton key={i} />);
  }

  return (
    <div className="App">
      <Navbar />
      <Header>
        <h1>Welcome!</h1>
        <h2>Search thousands of movies and nominate the ones you love!</h2>
      </Header>
      <Nominees>
        {nominatedMovies.map(movie => (
          <div key={movie.imdbID}>
            <MovieCard movie={movie} mb="5px" />
            <Button
              full
              onClick={() => unNominateMovie(movie)}
            >
              Remove
            </Button>
          </div>
        ))}
      </Nominees>
      <Section>
        <Container>
          <InputGroup>
            <label htmlFor="movie-searcher">Movie Search</label>
            <Input
              type="text"
              placeholder="Search for a movie by title"
              id="movie-searcher"
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <Grid>
            {isLoading ? (
              renderSkeletons()
            ) : isError ? (
              <p>No Results 😔</p>
            ) : (
              movies.map(movie => (
                <div key={movie.imdbID}>
                  <MovieCard movie={movie} mb="5px" />
                  <Button
                    full
                    disabled={isNominated(movie)}
                    onClick={() => nominateMovie(movie)}
                  >
                    Nominate
                  </Button>
                </div>
              ))
            )}
          </Grid>
        </Container>
      </Section>
    </div>
  );
}

export default App;
