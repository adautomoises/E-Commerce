// import React from 'react';
import { Container } from "./styles";

export function ButtonComponent(
  props: {
    label: string;
    isLoading?: boolean;
    onClick?: () => void | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
  }
) {
  return (
    <Container
      type={props.type}
      color={props.color}
      onClick={props.onClick}
      loading={props.isLoading}
      disabled={props.isLoading}
      variant={"contained"}
    >
      <span>{props.label}</span>
    </Container>
  );
}
