import styled from 'styled-components';

const Skeleton = styled.div`
  width: 100%;
  height: 0;
  padding-top: 150%;
  border-radius: 5px;
  background: linear-gradient(-90deg, #15171b 0%, #191c21 50%, #15171b 100%);
  background-size: 350% 450%;
  animation: pulse 1s ease-in-out infinite;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export default Skeleton;