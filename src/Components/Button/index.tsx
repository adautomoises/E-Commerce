//import React, { useState, useEffect } from 'react';
import { Container } from "./styles";

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    backgroundColor: string;
    color: string;
  }
) {
  const { label, backgroundColor, color, type, ...rest } = props;

  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      type={type}
      {...rest}
    >
      {label}
    </Container>
  );
}
