import styled from 'styled-components';

const Section = styled.section`
  width: 100%;

  &.welcome-section {
    position: relative;
    padding: 100px 0;

    @media (max-width: 830px) {
      padding: 60px 0;
    }
  }

  &.nominees-section {
    position: relative;
    min-height: 400px;
    padding: 16px 0;
    background-color: #111215;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }

  &.search-section {
    min-height: 100vh;
    padding: 16px 0;
  }
`;

export default Section;