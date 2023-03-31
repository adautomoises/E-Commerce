import styled from 'styled-components';

export const Header = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 1rem 2rem;

  select {
    border: none;
    background: none;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      span {
        font-size: 18px;
        font-weight: bold;
        width: max-content;
      }
    }
  }
`;

export const MenuItems = styled.div`
  width: 100%;
  justify-content: flex-end;

  gap: 5rem;
  div {
    width: min-content;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      border: none;
      background: none;
      font-weight: 500;
      font-size: 24px;
    }
  }

  @media (max-width: 320px) {
    display: none;
  }
`;
