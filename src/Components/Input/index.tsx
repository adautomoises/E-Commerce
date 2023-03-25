//import React, { useState, useEffect } from 'react';
import { Container, InputHTML, Icon } from './styles';
import * as Icons from "@mui/icons-material";

type IconProps = {
  iconName: keyof typeof Icons;
};

export function Input(props: IconProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const {iconName, ...rest} = props;
  const IconComponent = Icons[iconName];

  return(
  <Container>
    <Icon>
      <IconComponent />
    </Icon>
    <InputHTML {...rest}/>
  </Container>
  );
 };