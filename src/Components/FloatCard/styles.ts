import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  overflow: hidden;
`;

export const ProductCard = styled.div`
  position: relative;
  width: 420px;
  height: 350px;
`;

export const ProductTitle = styled.span`
  width: 50%;
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
  font-size: 20px;
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
  font-size: 18px;
  color: var(--text-color);
  text-decoration: line-through;
`;

export const ProductDiscount = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: var(--red);
`;

export const ProductCurrentPrice = styled.span`
  position: absolute;
  bottom: 5%;
  right: 5%;
  font-family: 'Raleway';
  font-weight: bold;
  font-size: 30px;
  color: var(--blue);
`;
