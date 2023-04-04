import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
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

export const CategoryButton = styled.div`
  min-width: 10%;
  text-align: center;
  span {
    font-weight: 500;
    font-size: 24px;
  }
  &:hover {
    color: var(--blue);
  }
  &:hover span {
    position: relative;

    ::after {
      content: "\u25B2";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      color: var(--dark-white);
    }
  }
  :last-child span {
    ::after {
      content: "";
    }
  }
  &:hover {
    .dropdown-content {
      padding: 0.5rem 1rem;
      display: block;
      color: var(--black);
    }
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  z-index: 2;
  background-color: var(--white);
  border-radius: 0.25rem;
  border-top: 2px solid var(--dark-white);
  min-width: 50%;
  @media (max-width: 1920px) {
    min-width: 70%;
  }
  ul {
    li {
      a {
        font-size: 16px;
      }
      list-style: none;
    }
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
