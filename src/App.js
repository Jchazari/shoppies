import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './reset.css';
import cleanString from './utils/cleanString';
import useDebounce from './hooks/useDebounce';
import useFetchMovies from './hooks/useFetchMovies';
import Container from './components/Container';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Nominees from './components/Nominees';
import MovieCard from './components/MovieCard';
import Skeleton from './components/Skeleton';
import Banner from './components/Banner';
import InputGroup from './components/InputGroup';
import Input from './components/Input';
import Button from './components/Button';

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 16px 0;
`;

function App() {
  const [value, setValue] = useState('');
  const search = useDebounce(value, 500);
  const { movies, isLoading, isError } = useFetchMovies(cleanString(search));
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [bannerActive, setBannerActive] = useState(false);

  useEffect(() => {
    if (nominatedMovies.length === 5) {
      setBannerActive(true);
    }
  }, [nominatedMovies])

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
    return (
      <Grid>
        {[...Array(6)].map((s, i) => <Skeleton key={i} />)}
      </Grid>
    );
  }

  return (
    <Fragment>
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
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </InputGroup>
            {isLoading ? (
              renderSkeletons()
            ) : isError ? (
              <p>No results for: {search}</p>
            ) : (
              <Grid>
                {movies.map(movie => (
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
                ))}
              </Grid>
            )}
          </Container>
        </Section>
        <Banner
          isActive={bannerActive}
          setBannerActive={setBannerActive}
        />
      </div>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
