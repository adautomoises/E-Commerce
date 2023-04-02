//import React, { useState, useEffect } from 'react';
import Rating from "@mui/material/Rating";
import { ReactComponent as BrandLogo } from "../../../Assets/blue_icon.svg";
import { ReactComponent as ShippingIcon } from "../../../Assets/shipping_icon.svg";
import { ReactComponent as RefundIcon } from "../../../Assets/refund_icon.svg";
import { ReactComponent as SupportIcon } from "../../../Assets/support_icon.svg";
import product_three from "../../../Assets/images/product_three.png";

import {
  Container,
  Info,
  ProvideContainer,
  ProvideTitle,
  ProvideDescription,
  LatestNews,
  LatestNewsTitle,
  LatestNewsContent,
  BrandContainer,
  BrandLogoContainer,
  BrandInfo,
  BrandDate,
  BrandTitle,
  BrandDescription,
  FeaturedProducts,
  FeaturedProductsTitle,
  FeaturedProductsContent,
  ProductCard,
  ProductImageContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductValues,
  ProductCurrentPrice,
  ProductPrice,
  SearchProduct,
  SearchInput,
  SearchButton,
} from "./styles";

export function PageInfo() {
  return (
    <Container>
      <Info>
        <ProvideContainer>
          <ShippingIcon />
          <ProvideTitle>FREE SHIPPING</ProvideTitle>
          <ProvideDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </ProvideDescription>
        </ProvideContainer>
        <ProvideContainer>
          <RefundIcon />
          <ProvideTitle>100% REFUND</ProvideTitle>
          <ProvideDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </ProvideDescription>
        </ProvideContainer>
        <ProvideContainer>
          <SupportIcon />
          <ProvideTitle>SUPPORT 24/7</ProvideTitle>
          <ProvideDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </ProvideDescription>
        </ProvideContainer>
      </Info>

      <LatestNews>
        <LatestNewsTitle>LATEST NEWS</LatestNewsTitle>
        <LatestNewsContent>
          <BrandContainer>
            <BrandLogoContainer>
              <BrandLogo />
            </BrandLogoContainer>
            <BrandInfo>
              <BrandDate>01 Jan, 2015</BrandDate>
              <BrandTitle>Fashion Industry</BrandTitle>
              <BrandDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BrandDescription>
            </BrandInfo>
          </BrandContainer>
          <BrandContainer>
            <BrandLogoContainer>
              <BrandLogo />
            </BrandLogoContainer>
            <BrandInfo>
              <BrandDate>01 Jan, 2015</BrandDate>
              <BrandTitle>Best Design Tools</BrandTitle>
              <BrandDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BrandDescription>
            </BrandInfo>
          </BrandContainer>
          <BrandContainer>
            <BrandLogoContainer>
              <BrandLogo />
            </BrandLogoContainer>
            <BrandInfo>
              <BrandDate>01 Jan, 2015</BrandDate>
              <BrandTitle>HR Community</BrandTitle>
              <BrandDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BrandDescription>
            </BrandInfo>
          </BrandContainer>
        </LatestNewsContent>
      </LatestNews>

      <FeaturedProducts>
        <FeaturedProductsTitle>FEATURED PRODUCTS</FeaturedProductsTitle>
        <FeaturedProductsContent>
          <ProductCard>
            <ProductImageContainer>
              <ProductImage src={product_three} />
            </ProductImageContainer>
            <ProductInfo>
              <ProductTitle>Blue Swade Nike Sneakers</ProductTitle>
              <Rating size="small" name="read-only" value={4} readOnly />
              <ProductValues>
                <ProductCurrentPrice>$499</ProductCurrentPrice>
                <ProductPrice>$599</ProductPrice>
              </ProductValues>
            </ProductInfo>
          </ProductCard>
          <ProductCard>
            <ProductImageContainer>
              <ProductImage src={product_three} />
            </ProductImageContainer>
            <ProductInfo>
              <ProductTitle>Blue Swade Nike Sneakers</ProductTitle>
              <Rating size="small" name="read-only" value={4} readOnly />
              <ProductValues>
                <ProductCurrentPrice>$499</ProductCurrentPrice>
                <ProductPrice>$599</ProductPrice>
              </ProductValues>
            </ProductInfo>
          </ProductCard>
          <ProductCard>
            <ProductImageContainer>
              <ProductImage src={product_three} />
            </ProductImageContainer>
            <ProductInfo>
              <ProductTitle>Blue Swade Nike Sneakers</ProductTitle>
              <Rating size="small" name="read-only" value={4} readOnly />
              <ProductValues>
                <ProductCurrentPrice>$499</ProductCurrentPrice>
                <ProductPrice>$599</ProductPrice>
              </ProductValues>
            </ProductInfo>
          </ProductCard>
        </FeaturedProductsContent>
      </FeaturedProducts>
      <SearchProduct>
        <SearchInput placeholder="Buscar produto..." />
        <SearchButton>Buscar</SearchButton>
      </SearchProduct>
    </Container>
  );
}
