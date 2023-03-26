import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue);
  position: relative;
  overflow: hidden;
`;

export const ContainerAnimation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(0);
  width: 100px;
  height: 100px;
  background-color: var(--white);
  border-radius: 2rem;
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

export const ContainerForm = styled.div`
  width: 100%;
  padding: 1rem;
  opacity: 0;
  animation: container-form 1s ease-in-out 500ms forwards;
`;
