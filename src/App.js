import React, { useState, useEffect, useRef, Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './reset.css';
import useDebounce from './hooks/useDebounce';
import useFetchMovies from './hooks/useFetchMovies';
import cleanString from './utils/cleanString';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import MovieResults from './components/MovieResults';
import Skeleton from './components/Skeleton';
import Toggler from './components/Toggler';
import Nominees from './components/Nominees';
import Input from './components/Input';

const MovieSearchSection = styled.section`
  width: 100%;
  min-height: calc(50vh + 75.75px);
  padding: 16px 0;
`;

const SearchWrapper = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;

function App() {
  const inputRef = useRef();
  const [value, setValue] = useState('');
  const search = useDebounce(value, 500);
  const { movies, status } = useFetchMovies(cleanString(search));
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('nominated-movies');
    if (data) setNominatedMovies(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('nominated-movies', JSON.stringify(nominatedMovies))
  });

  useEffect(() => {
    if (nominatedMovies.length === 5) {
      setIsFinished(true);
      setIsToggled(true);
      return;
    }
    setIsFinished(false);
  }, [nominatedMovies]);

  function nominateMovie(movie) {
    if (!isFinished) {
      setNominatedMovies([...nominatedMovies, movie]);
      return;
    }

    alert("You already nominated 5 movies!");
  }

  function unNominateMovie(movie) {
    const filteredNM = nominatedMovies.filter(mov => mov !== movie);
    setNominatedMovies(filteredNM);
  }

  function isNominated(movie) {
    return nominatedMovies.some(mov => mov.imdbID === movie.imdbID);
  }

  function renderSearchContent() {
    switch (status) {
      case "loading":
        return <Skeleton qty={6} />;
      case "error":
        return <p>No results for: {search}</p>;
      case "success":
        return (
          <MovieResults
            movies={movies}
            nominateMovie={nominateMovie}
            isNominated={isNominated}
          />
        );
      default:
        return null;
    }
  }

  return (
    <Fragment>
      <GlobalStyle noScroll={isToggled} />
      <Navbar />
      <Welcome inputRef={inputRef} />
      <MovieSearchSection>
        <Container>
          <SearchWrapper>
            <Label htmlFor="searcher">Movie Search</Label>
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search for a movie by title"
              id="searcher"
              autoComplete="off"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </SearchWrapper>
          <p>{process.env.REACT_APP_OMDB_API_KEY}</p>
          {renderSearchContent()}
        </Container>
      </MovieSearchSection>
      <Toggler
        count={nominatedMovies.length}
        onClick={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <Nominees
          nominatedMovies={nominatedMovies}
          unNominateMovie={unNominateMovie}
          setIsToggled={setIsToggled}
          isFinished={isFinished}
        />
      )}
    </Fragment>
  );
}

export default App;
