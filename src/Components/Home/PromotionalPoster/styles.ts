import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
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
