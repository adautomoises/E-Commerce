import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  margin: 5rem auto;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
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

export const Info = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProvideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    margin-bottom: 2.5rem;
  }
`;
export const ProvideTitle = styled.span`
  font-weight: 500;
  font-size: 27px;
  margin-bottom: 1rem;
`;
export const ProvideDescription = styled.span`
  width: 50%;
  text-align: center;
`;

export const LatestNews = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const LatestNewsTitle = styled.span`
  font-weight: 600;
  font-size: 34px;
  margin-bottom: 5rem;
`;
export const LatestNewsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BrandLogoContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BrandInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const BrandDate = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: var(--text-color);
`;
export const BrandTitle = styled.span`
  font-weight: 600;
  font-size: 22px;
`;
export const BrandDescription = styled.span`
  font-size: 18px;
`;

export const FeaturedProducts = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const FeaturedProductsTitle = styled.span`
  font-weight: 600;
  font-size: 34px;
  margin-bottom: 5rem;
`;
export const FeaturedProductsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const ProductImageContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.25rem;
`;
export const ProductTitle = styled.span`
  font-size: 22px;
`;
export const ProductValues = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;
export const ProductCurrentPrice = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: var(--red);
`;
export const ProductPrice = styled.span`
  font-size: 20px;
  color: var(--text-color);
  text-decoration: line-through;
`;

export const SearchProduct = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  border: 2px solid var(--blue);
  &:hover {
    border: 2px solid var(--dark-blue);
  }
  border-radius: 0.25rem;
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  padding: 1rem;
  &:focus-visible {
    outline: none;
  }
`;
export const SearchButton = styled.button`
  border: none;
  background: none;
  background-color: var(--blue);
  padding: 1rem;
  color: var(--white);
  font-weight: 600;
  font-size: 20px;

  &:hover {
    background-color: var(--dark-blue);
  }
`;
