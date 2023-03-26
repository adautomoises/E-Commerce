import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue);
  position: relative;
  overflow: auto;
`;

export const ContainerForm = styled.form`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 5%;
  padding: 1.5rem;

  position: absolute;
  opacity: 0;
  transform: translateY(10%) translateZ(0);
  animation: container-form 1s ease-in-out 500ms forwards;
`;

export const Title = styled.span`
  font-weight: bold;
  color: var(--title-color);
`;

export const Subtitle = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

export const ContainerAnimation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(0);
  width: 100px;
  height: 100px;
  background-color: var(--white);
  border-radius: 1rem;
  animation: expand-container 1s ease-in-out forwards;
`;

export const ContainerBlueIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(0);
  animation: container-blue 1s ease-in-out forwards;
`;

export const ContainerWhiteIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(0);
  border: 2px solid white;
  border-radius: 2rem;
  animation: container-white 1s ease-in-out forwards;
`;

export const OrLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 1rem 0;
  color: var(--text-color);
  font-size: 12px;
  font-weight: bold;
  &::after {
    content: "";
    width: 100%;
    border-bottom: 1px solid var(--button-border);
  }
  &::before {
    content: "";
    width: 100%;
    border-bottom: 1px solid var(--button-border);
  }
`;

export const AlternativeButton = styled.button`
  width: 100%;
  height: 3rem;
  justify-content: space-between;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid var(--button-border);
  border-radius: 0.25rem;
  background-color: var(--white);
  svg {
    color: var(--dark-blue);
  }
  div {
    width: 100%;
    color: var(--text-color);
    font-weight: bold;
    font-size: 14px;
  }
  &:hover {
    background-color: var(--dark-white);
  }
`;

export const ForgetPassword = styled.button`
  color: var(--blue);
  background: none;
  border: none;
  font-size: 12px;
  font-weight: bold;
  &:hover {
    color: var(--dark-blue);
  }
`;

export const ContainerRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--text-color);
  font-size: 12px;
`;

export const RegisterButton = styled.button`
  color: var(--blue);
  font-size: 12px;
  font-weight: bold;
  background: none;
  border: none;

  &:hover {
    color: var(--dark-blue);
  }
`;
