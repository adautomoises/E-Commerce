import styled from "styled-components";

interface Props {
  backgroundColor: string;
  color: string;
}

export const Container = styled.button<Props>`
  width: 100%;
  height: 3rem;
  color: ${(props) => props.color};
  background-color: var(--${(props) => props.backgroundColor});
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;

  &:hover {
    background-color: var(--dark-${(props) => props.backgroundColor});
  }
`;
