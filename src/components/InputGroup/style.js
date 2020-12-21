import styled from 'styled-components/macro';

export const StyledInputGroup = styled.div`
  margin-top: ${({ mt }) => mt && mt};
  margin-right: ${({ mr }) => mr && mr};
  margin-bottom: ${({ mb }) => mb && mb};
  margin-left: ${({ ml }) => ml && ml};
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: ${({ mb }) => mb ? mb : '0.5rem'};
`;