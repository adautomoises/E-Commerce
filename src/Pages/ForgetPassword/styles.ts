import styled from 'styled-components';

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue);
  overflow: auto;
`;

export const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: var(--white);
`;

export const HeaderForm = styled.div`
  position: relative;
  width: 100%;
  h1 {
    width: 100%;
    height: 2.5rem;
    font-size: 16px;
    font-weight: bold;
  }
  margin-bottom: 2rem;
`;

export const FirstForm = styled.form`
  h2 {
    width: 100%;
    height: 2.5rem;
    font-size: 12px;
    text-align: left;
  }
  margin-top: 2rem;
`;
export const SecondForm = styled.form`
  h2 {
    width: 100%;
    height: 2.5rem;
    font-size: 12px;
    text-align: left;
  }
  margin-top: 2rem;
`;

export const Code = styled.div`
  display: flex;
  margin: 0.75rem;
`;

export const ThirdForm = styled.form`
  h2 {
    width: 100%;
    height: 2.5rem;
    font-size: 12px;
    text-align: left;
  }
  margin-top: 2rem;
`;
