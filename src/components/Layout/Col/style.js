import styled from 'styled-components';

export const StyledCol = styled.div`
  flex: 0 0 calc(100% / 5);
  max-width: calc(100% / 5);
  margin-bottom: 20px;
  padding: 0 10px;
  @media screen and (max-width: 940px) {
    flex: 0 0 calc(100% / 4);
    max-width: calc(100% / 4);
  }
  @media screen and (max-width: 840px) {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
  @media screen and (max-width: 640px) {
    flex: 0 0 calc(100% / 2);
    max-width: calc(100% / 2);
  }
`;