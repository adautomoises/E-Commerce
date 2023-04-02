import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1440px) {
    max-width: 1440px;
  }
  @media (max-width: 1080px) {
    max-width: 1080px;
  }
  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

export const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`;

export const Title = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: var(--white);
  position: absolute;
  top: 50%;
  left: 5%;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
