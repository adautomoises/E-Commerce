import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 5rem;
  background-color: var(--blue);
`;

export const PosterImage = styled.div`
  position: relative;
  max-width: 1080px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.span`
  width: 60%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;

  font-weight: 500;
  font-size: 50px;
  color: white;
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
`;

export const Image = styled.img`
  position: absolute;
  width: 60%;
  top: -15%;
  right: -10%;
`;
