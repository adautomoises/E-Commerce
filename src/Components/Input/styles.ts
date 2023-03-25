import styled from "styled-components";

export const Container = styled.div`
width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: .25rem;
  margin-bottom: 1rem;
`;
export const InputHTML = styled.input`
  padding: 0 0.25rem;
  background: none;
  border: none;
  &::placeholder {
    color: #000000;
  }
  &:focus {
    outline: none;
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
`;
