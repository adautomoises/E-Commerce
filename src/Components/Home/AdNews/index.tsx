//import React, { useState, useEffect } from 'react';
import {
  Container,
  PosterImage,
  Title,
  SubTitle,
  Button,
  Image,
} from "./styles";

import SapatoAzul from "../../../Assets/images/sapato_azul.png";

export function AdNews() {
  return (
    <Container>
      <PosterImage>
        <Title>Adidas Men Running Sneakers</Title>
        <SubTitle>Performance and design. Taken right to the edge.</SubTitle>
        <Button>SHOP NOW</Button>
        <Image src={SapatoAzul} alt="Novidade de Anunciante" />
      </PosterImage>
    </Container>
  );
}
