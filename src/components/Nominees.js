import React from 'react'
import styled from 'styled-components';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import MovieCard from './MovieCard';
import Button from './Button';

// const StyledNominees = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   overflow-x: auto;
  
//   @media (max-width: 915px) {
//     justify-content: flex-start;
//   }
// `;

const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 16px 0;
  background-color: #18191f;
  overflow: hidden;
`;

const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  overflow-x: auto;
  overflow-y: visible;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1010px) {
    justify-content: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
`;

function Nominees({ children }) {
  return (
    <Section>
      <Container>
        <Title>Your Nominations</Title>
        <MoviesContainer>
          <Row nowrap>
            <Col fixed>
              <MovieCard />
              <Button mt="4px" full>Remove</Button>
            </Col>
            <Col fixed>
              <MovieCard />
              <Button mt="4px" full>Remove</Button>
            </Col>
            <Col fixed>
              <MovieCard />
              <Button mt="4px" full>Remove</Button>
            </Col>
            <Col fixed>
              <MovieCard />
              <Button mt="4px" full>Remove</Button>
            </Col>
            <Col fixed>
              <MovieCard />
              <Button mt="4px" full>Remove</Button>
            </Col>
          </Row>
        </MoviesContainer>
      </Container>
    </Section>
  );
}

export default Nominees;