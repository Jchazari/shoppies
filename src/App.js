import React, { useState, useEffect, useRef, Fragment } from 'react';
import GlobalStyle from './reset.css';
import cleanString from './utils/cleanString';
import useDebounce from './hooks/useDebounce';
import useFetchMovies from './hooks/useFetchMovies';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Nominees from './components/Nominees';
import Toggler from './components/Toggler';
import MovieResults from './components/MovieResults';
import Section from './components/Section';
import Container from './components/Container';
import Skeleton from './components/Skeleton';
import InputGroup from './components/InputGroup';
import Input from './components/Input';
import Label from './components/Label';

function App() {
  const inputRef = useRef();
  const [value, setValue] = useState('');
  const search = useDebounce(value, 500);
  const { movies, isLoading, isError } = useFetchMovies(cleanString(search));
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (nominatedMovies.length === 5) {
      setIsFinished(true);
      setIsToggled(true);
    } else {
      setIsFinished(false);
    }
  }, [nominatedMovies]);

  function nominateMovie(movie) {
    if (!isFinished) {
      setNominatedMovies([...nominatedMovies, movie]);
      return;
    }

    alert("You already completed nominating 5 movies!");
  }

  function unNominateMovie(movie) {
    const filteredNM = nominatedMovies.filter(mov => mov !== movie);
    setNominatedMovies(filteredNM);
  }

  function isNominated(movie) {
    return nominatedMovies.some(mov => mov.imdbID === movie.imdbID);
  }

  return (
    <Fragment>
      <GlobalStyle />
        <Navbar />
        <Welcome inputRef={inputRef} />
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
        <Nominees
          isFinished={isFinished}
          nominatedMovies={nominatedMovies}
          unNominateMovie={unNominateMovie}
          toggledState={{isToggled, setIsToggled}}
        />
        <Toggler
          count={nominatedMovies.length}
          onClick={() => setIsToggled(!isToggled)}
        />
    </Fragment>
  );
}

export default App;
