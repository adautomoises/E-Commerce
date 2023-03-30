import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  select {
    border: none;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

      span {
        font-size: 18px;
        font-weight: bold;
        width: max-content;
      }
    }
  }
  padding: 0 5rem;
`;

export const MenuItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    font-weight: 500;
    font-size: 24px;
  }
`;
