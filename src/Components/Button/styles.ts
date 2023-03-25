import styled from 'styled-components';

interface Props {
  backgroundColor: string;
  color: string;
}

export const Container = styled.button<Props>`
  color: ${props => (props.color)};
  background-color: ${props => (props.backgroundColor)};

  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
`;
