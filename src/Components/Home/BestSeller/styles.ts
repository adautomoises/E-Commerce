import styled from "styled-components";
import { IconButton } from "@mui/material";

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  margin-top: 15rem;
  @media (max-width: 1080px) {
    margin-top: 15rem;
    /* margin-top: 1rem; */
  }
  @media (max-width: 1440px) {
    margin-top: 15rem;
    max-width: 1440px;
  }
  @media (max-width: 1080px) {
    margin-top: 15rem;
    max-width: 1080px;
  }
  @media (max-width: 768px) {
    margin-top: 15rem;
    max-width: 768px;
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
  @media (max-width: 512px) {
    grid-row-gap: 0;
    column-gap: 0;
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.1rem;
  overflow: hidden;
  border: 3px solid var(--button-border);

  :first-child {
    ::before {
      content: "HOT";
      width: max-content;
      padding: 0 2px;
      border-radius: 10%;
      color: var(--white);
      font-size: 12px;
      background-color: var(--red);
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  @media (max-width: 512px) {
    display: flex;
    border: none;
    border-bottom: 1px solid var(--dark-white);
    :first-child {
      border-top: 1px solid var(--dark-white);
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  &:hover {
    opacity: 0.2;
  }

  @media (max-width: 512px) {
    pointer-events: none;
    width: 25%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HeartButton = styled(IconButton)`
  &.MuiIconButton-root {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 4px;
    @media (min-width: 513px) {
      display: none;
    }
  }
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

  @media (max-width: 512px) {
    width: 80%;
    -webkit-line-clamp: 1;
    text-align: center;
  }
  @media (max-width: 400px) {
    text-align: start;
  }
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
  &:hover {
    color: var(--dark-blue);
    border-bottom: 3px solid var(--dark-blue);
  }
`;
