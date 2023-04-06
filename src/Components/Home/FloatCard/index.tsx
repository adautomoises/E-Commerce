//import React, { useState, useEffect } from 'react';
import {
  Container,
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductDiscount,
  ProductCurrentPrice,
} from "./styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import product_one from "../../../Assets/images/product_one.png";
import product_two from "../../../Assets/images/product_two.png";
import product_three from "../../../Assets/images/product_three.png";

export function FloatCard() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        <ProductCard>
          <ProductTitle>FS - QUILTED MAXI CROSS BAG</ProductTitle>
          <ProductImage src={product_one} alt="Produto" />
          <ProductInfo>
            <ProductPrice>$534,33</ProductPrice>
            <ProductDiscount>24% Off</ProductDiscount>
          </ProductInfo>
          <ProductCurrentPrice>$299,43</ProductCurrentPrice>
        </ProductCard>
        <ProductCard>
          <ProductTitle>FS - QUILTED MAXI CROSS BAG</ProductTitle>
          <ProductImage src={product_two} alt="Produto" />
          <ProductInfo
            style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }}
          >
            <ProductPrice>$534,33</ProductPrice>
            <ProductDiscount>24% Off</ProductDiscount>
          </ProductInfo>
          <ProductCurrentPrice style={{ top: "15%", right: "5%" }}>
            $299,43
          </ProductCurrentPrice>
        </ProductCard>
        <ProductCard>
          <ProductTitle>FS - QUILTED MAXI CROSS BAG</ProductTitle>
          <ProductImage src={product_three} alt="Produto" />
          <ProductInfo style={{ bottom: "65%" }}>
            <ProductPrice>$534,33</ProductPrice>
            <ProductDiscount>24% Off</ProductDiscount>
          </ProductInfo>
          <ProductCurrentPrice>$299,43</ProductCurrentPrice>
        </ProductCard>
      </Slider>
    </Container>
  );
}
