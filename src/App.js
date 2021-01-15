import React, { useRef, useState } from 'react';
import GlobalStyle from './reset.css';
import cleanString from './utils/cleanString';
import useDebounce from './hooks/useDebounce';
import useFetchMovies from './hooks/useFetchMovies';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Nominees from './components/Nominees';
import MovieResults from './components/MovieResults';
import Section from './components/Section';
import Container from './components/Container';
import Skeleton from './components/Skeleton';
import InputGroup from './components/InputGroup';
import Input from './components/Input';
import Label from './components/Label';

function App() {
  const [value, setValue] = useState('');
  const search = useDebounce(value, 500);
  const { movies, isLoading, isError } = useFetchMovies(cleanString(search));
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const inputRef = useRef();

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

  return (
    <>
      <div className="App">
        <Navbar />
        <Welcome inputRef={inputRef} />
        <Nominees
          nominatedMovies={nominatedMovies}
          unNominateMovie={unNominateMovie}
        />
        <Section className="search-section">
          <Container>
            <InputGroup>
              <Label htmlFor="searcher" size="20px">
                Movie Search
              </Label>
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search for a movie by title"
                id="searcher"
                autoComplete="off"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </InputGroup>
            {isLoading ? (
              <Skeleton qty={6} />
            ) : isError ? (
              <p>No results for: {search}</p>
            ) : (
              <MovieResults
                movies={movies}
                nominateMovie={nominateMovie}
                isNominated={isNominated}
              />
            )}
          </Container>
        </Section>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
