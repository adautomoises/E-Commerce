//import React, { useState, useEffect } from 'react';
import {
  Container,
  GridProductCards,
  MenuItems,
  MoreProducts,
  ProductCard,
  ProductCurrentPrice,
  ProductDiscount,
  ProductImage,
  ProductInfo,
  HeartButton,
  ProductName,
  ProductPrice,
  ProductValues,
} from "./styles";

import product_one from "../../../Assets/images/product_one.png";
import product_two from "../../../Assets/images/product_two.png";
import product_three from "../../../Assets/images/product_three.png";
import Rating from "@mui/material/Rating";
import { AddShoppingCart, Favorite } from "@mui/icons-material";

export function BestSeller() {
  return (
    <Container className="center">
      <h1>MAIS VENDIDOS</h1>
      <MenuItems>
        <button>Todos</button>
        <button>Mochilas</button>
        <button>Sapatos</button>
        <button>Relógios</button>
        <button>Óculos</button>
      </MenuItems>
      <GridProductCards>
        <ProductCard>
          <ProductImage src={product_one} />
          <ProductInfo className="center">
            <HeartButton>
              <Favorite color="secondary" />
            </HeartButton>
            <ProductName>Nike Air Max 270 React</ProductName>
            <Rating size="small" name="read-only" value={4} readOnly />
            <ProductValues className="center">
              <ProductCurrentPrice>$299,43</ProductCurrentPrice>
              <ProductPrice>$534,33</ProductPrice>
              <ProductDiscount>24% Off</ProductDiscount>
            </ProductValues>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <ProductImage src={product_one} />
          <ProductInfo className="center">
            <HeartButton>
              <Favorite color="secondary" />
            </HeartButton>
            <ProductName>Nike Air Max 270 React</ProductName>
            <Rating size="small" name="read-only" value={4} readOnly />
            <ProductValues className="center">
              <ProductCurrentPrice>$299,43</ProductCurrentPrice>
              <ProductPrice>$534,33</ProductPrice>
              <ProductDiscount>24% Off</ProductDiscount>
            </ProductValues>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <ProductImage src={product_one} />
          <ProductInfo className="center">
            <HeartButton>
              <Favorite color="secondary" />
            </HeartButton>
            <ProductName>Nike Air Max 270 React</ProductName>
            <Rating size="small" name="read-only" value={4} readOnly />
            <ProductValues className="center">
              <ProductCurrentPrice>$299,43</ProductCurrentPrice>
              <ProductPrice>$534,33</ProductPrice>
              <ProductDiscount>24% Off</ProductDiscount>
            </ProductValues>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <ProductImage src={product_one} />
          <ProductInfo className="center">
            <HeartButton>
              <Favorite color="secondary" />
            </HeartButton>
            <ProductName>Nike Air Max 270 React</ProductName>
            <Rating size="small" name="read-only" value={4} readOnly />
            <ProductValues className="center">
              <ProductCurrentPrice>$299,43</ProductCurrentPrice>
              <ProductPrice>$534,33</ProductPrice>
              <ProductDiscount>24% Off</ProductDiscount>
            </ProductValues>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <ProductImage src={product_one} />
          <ProductInfo className="center">
            <HeartButton>
              <Favorite color="secondary" />
            </HeartButton>
            <ProductName>Nike Air Max 270 React</ProductName>
            <Rating size="small" name="read-only" value={4} readOnly />
            <ProductValues className="center">
              <ProductCurrentPrice>$299,43</ProductCurrentPrice>
              <ProductPrice>$534,33</ProductPrice>
              <ProductDiscount>24% Off</ProductDiscount>
            </ProductValues>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <ProductImage src={product_one} />
          <ProductInfo className="center">
            <HeartButton>
              <Favorite color="secondary" />
            </HeartButton>
            <ProductName>Nike Air Max 270 React</ProductName>
            <Rating size="small" name="read-only" value={4} readOnly />
            <ProductValues className="center">
              <ProductCurrentPrice>$299,43</ProductCurrentPrice>
              <ProductPrice>$534,33</ProductPrice>
              <ProductDiscount>24% Off</ProductDiscount>
            </ProductValues>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <ProductImage src={product_one} />
          <ProductInfo className="center">
            <HeartButton>
              <Favorite color="secondary" />
            </HeartButton>
            <ProductName>Nike Air Max 270 React</ProductName>
            <Rating size="small" name="read-only" value={4} readOnly />
            <ProductValues className="center">
              <ProductCurrentPrice>$299,43</ProductCurrentPrice>
              <ProductPrice>$534,33</ProductPrice>
              <ProductDiscount>24% Off</ProductDiscount>
            </ProductValues>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <ProductImage src={product_one} />
          <ProductInfo className="center">
            <HeartButton>
              <Favorite color="secondary" />
            </HeartButton>
            <ProductName>Nike Air Max 270 React</ProductName>
            <Rating size="small" name="read-only" value={4} readOnly />
            <ProductValues className="center">
              <ProductCurrentPrice>$299,43</ProductCurrentPrice>
              <ProductPrice>$534,33</ProductPrice>
              <ProductDiscount>24% Off</ProductDiscount>
            </ProductValues>
          </ProductInfo>
        </ProductCard>
      </GridProductCards>
      <MoreProducts>VISUALIZAR</MoreProducts>
    </Container>
  );
}
