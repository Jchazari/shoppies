import React from 'react'
import { Container, Row, Col } from './components/Layout';
import Navbar from './components/Navbar';
import Header from './components/Header';
import InputGroup from './components/InputGroup';
import Searcher from './components/Searcher';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header>
        <Container>
          <Header.Title>Welcome!</Header.Title>
          <Header.SubTitle>Search thousands of movies and nominate the ones you love!</Header.SubTitle>
        </Container>
      </Header>
      <Container>
        <InputGroup mt="24px" mb="48px">
          <InputGroup.Label htmlFor="movie-searcher">Movie Search</InputGroup.Label>
          <Searcher type="text" placeholder="Search for a movie by title" id="movie-searcher" />
        </InputGroup>
        <Row>
          <Col>
            <MovieCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
