import styled from 'styled-components';

const Section = styled.section`
  width: 100%;

  &.welcome-section {
    display: flex;
    align-items: center;
    height: calc(100vh - 75.75px);
    position: relative;
  }

  &.search-section {
    min-height: 100vh;
    padding: 16px 0;
  }
`;

export default Section;