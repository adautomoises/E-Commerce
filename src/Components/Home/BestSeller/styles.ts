import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  margin-top: 15rem;
  @media (max-width: 1080px) {
    margin-top: 1rem;
  }
`;

export const MenuItems = styled.div`
  max-width: 100%;
  gap: 3rem;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0 2rem;
  }

  button {
    border: none;
    background: none;
    font-size: 22px;
    &:hover {
      color: var(--blue);
    }
  }
`;

export const GridProductCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);
  justify-content: center;
  grid-row-gap: 2rem;
  column-gap: 2rem;
`;

export const ProductCard = styled.div`
  width: 100%;
  border-radius: 0.1rem;
  overflow: hidden;
  border: 3px solid var(--button-border);
`;

export const ProductName = styled.span`
  width: 90%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  font-weight: bold;
  font-size: 16px;
  color: var(--title-color);
`;

export const ProductHoverImg = styled.button`
  width: 100%;
  border: none;
  background: none;

  img:hover {
    opacity: 0.2;
  }
  div:hover {
    position: absolute;
    display: flex;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
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
  font-size: 10px;
  color: var(--text-color);
  text-decoration: line-through;
`;

export const ProductDiscount = styled.span`
  font-weight: bold;
  font-size: 10px;
  color: var(--red);
`;

export const ProductCurrentPrice = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: var(--blue);
`;

export const MoreProducts = styled.button`
  font-weight: 500;
  font-size: 16px;
  color: var(--blue);
  border: none;
  background: none;
  border-bottom: 3px solid var(--blue);
`;