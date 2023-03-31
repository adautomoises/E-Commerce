import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const PromotionalPoster = styled.div`
  position: relative;
  text-align: center;
`;
export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
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
