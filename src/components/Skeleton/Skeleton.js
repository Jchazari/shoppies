import styled from 'styled-components';

const Skeleton = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background: linear-gradient(-90deg, #f1f1f1 0%, #e4e4e4 50%, #f1f1f1 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  
  @media screen and (max-width: 640px) {
    height: 275px;
  }
`;

export default Skeleton;