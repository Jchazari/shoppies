import React, { useState, useEffect } from 'react';
import { fakeMoviesData } from './fakeMovies';
import { BASE_URL } from './constants';
import { ReactComponent as Trophy } from './assets/trophy.svg';
import useDebounce from './hooks/useDebounce';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Nominees from './components/Nominees';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import InputGroup from './components/InputGroup';
import Input from './components/Input';
import Button from './components/Button';
import MovieCard from './components/MovieCard';
import Skeleton from './components/Skeleton';

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
      <Nominees />
      <Container>
        <InputGroup mt="24px" mb="48px">
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
        <Row>
          {fakeMoviesData.map(movie => (
            <Col>
              <MovieCard movie={movie} />
              <Button mt="4px" icon={<Trophy />} full>Nominate</Button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
