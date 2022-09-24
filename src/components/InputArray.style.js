import styled from 'styled-components';

export const InputArrayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #22303c;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const InputArrayElement = styled.div`
  margin: 0.5rem;
  width: calc(100% - 2rem);
`;

export const InputArrayInput = styled.input`
  padding: 0.5rem;
  font-weight: bold;
  width: calc(100% - 1.25rem);
  text-align: center;
  background: #8899a6;
  color: #ffffff;
  border-radius: 0.5rem;
`;
