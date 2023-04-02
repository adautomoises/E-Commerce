import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const TopHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fafafb;
  padding: 0 3rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  select {
    border: none;
    background: none;
  }
  div {
    span {
      font-size: 18px;
      font-weight: bold;
      width: max-content;
    }
  }
`;

export const BottomHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fafafb;
  padding: 0 3rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoName = styled.span`
  margin-left: 0.5rem;
  font-size: 18px;
  font-weight: bold;
  width: max-content;
`;

export const MenuItems = styled.div`
  width: 100%;
  gap: 2rem;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CategoryButton = styled.button`
  border: none;
  background: none;
  font-weight: 500;
  font-size: 24px;
  &:hover {
    color: var(--blue);
  }
`;

export const MobileMenuItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 769px) {
    display: none;
  }
`;
