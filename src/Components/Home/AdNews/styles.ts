import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 5rem;
  background-color: var(--blue);
`;

export const PosterImage = styled.div`
  position: relative;
  max-width: 1920px;
  width: 90%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1440px) {
    max-width: 1440px;
  }
  @media (max-width: 1080px) {
    max-width: 1080px;
  }
  @media (max-width: 768px) {
    max-width: 768px;
  }
  @media (max-width: 512px) {
    max-width: 512px;
  }
`;

export const Title = styled.span`
  width: 50%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;

  font-weight: 500;
  font-size: 50px;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    -webkit-line-clamp: initial;
  }
`;

export const SubTitle = styled.span`
  font-size: 20px;
  color: white;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: white;
  border: none;
  background: none;
  border-bottom: 3px solid var(--white);
  &:hover {
    color: var(--dark-white);
    border-bottom: 3px solid var(--dark-white);
  }
`;

export const Image = styled.img`
  position: absolute;
  max-width: 1440px;
  width: 50%;
  top: -15%;
  right: -10%;
  pointer-events: none;

  @media (max-width: 1440px) {
    width: 60%;
    top: -10%;
    right: -12%;
  }
  @media (max-width: 1080px) {
    width: 60%;
    top: -10%;
    right: -12%;
  }
  @media (max-width: 768px) {
    position: static;
    max-height: 40%;
    width: 100%;
    object-fit: contain;
    text-align: center;
  }
  @media (max-width: 550px) {
    max-height: 30%;
  }
  @media (max-width: 550px) {
    max-height: 25%;
  }
`;
