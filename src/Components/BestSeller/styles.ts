import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15rem;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuItems = styled.div`
  width: 100%;
  gap: 3rem;
  button {
    border: none;
    background: none;
    font-size: 22px;
  }
`;

export const GridProductCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 26rem);
  justify-content: center;
  padding: 2rem;
  grid-row-gap: 2rem;
  column-gap: 2rem;
`;

export const ProductCard = styled.div`
  width: 420px;
  height: 400px;
  border-radius: 1rem;
  border: 3px solid var(--button-border);
  overflow: hidden;
`;

export const ProductName = styled.span`
  width: 100%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  font-weight: bold;
  font-size: 20px;
  color: var(--title-color);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const ProductInfo = styled.div`
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductValues = styled.div`
  width: 100%;
  gap: 1rem;
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
  font-family: 'Raleway';
  font-weight: bold;
  font-size: 18px;
  color: var(--blue);
`;

export const MoreProducts = styled.button`
  font-weight: 500;
  font-size: 20px;
  color: var(--blue);
  border: none;
  background: none;
  border-bottom: 3px solid var(--blue);
`;
