//import React, { useState, useEffect } from 'react';
import { Container, Image, Title } from "./styles";

import promotionImage from "../../../Assets/images/PromotionImage.png";

export function PromotionalPoster() {
  return (
    <Container>
      <Image src={promotionImage} alt="Cartaz Promocional" />
      <Title>50% de desconto</Title>
    </Container>
  );
}
