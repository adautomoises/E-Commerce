import styled from 'styled-components';

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: var(--white);

  button {
    border: none;
    background: none;
  }
`;

export const Content = styled.div``;

export const PromotionalPoster = styled.div`
  position: relative;
`;
export const PosterImage = styled.img`
  resize: 'cover';
`;
export const PosterTitle = styled.span`
  position: absolute;
  top: 50%;
  left: 5%;
  font-size: 48px;
  font-weight: bold;
  color: var(--white);
`;
