import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  width: 90%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -25%);
  overflow: hidden;
  /* @media (max-width: 1080px) {
    position: static;
    transform: none;
  } */
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

export const ProductCard = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

export const ProductTitle = styled.span`
  width: 40%;
  position: absolute;
  top: 5%;
  left: 10%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;

  font-weight: bold;
  font-size: 16px;
  color: var(--title-color);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  color: var(--text-color);
  text-decoration: line-through;
`;

export const ProductDiscount = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: var(--red);
`;

export const ProductCurrentPrice = styled.span`
  position: absolute;
  bottom: 5%;
  right: 5%;
  font-family: "Raleway";
  font-weight: bold;
  font-size: 26px;
  color: var(--blue);
`;
