//import React, { useState, useEffect } from "react";
import {
  Container,
  TopHeader,
  BottomHeader,
  LogoContainer,
  LogoName,
  MenuItems,
  CategoryButton,
  MobileMenuItems,
  DropdownContent,
} from "./styles";
import { ReactComponent as BlueIcon } from "../../Assets/blue_icon.svg";
import { Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, Person } from "@mui/icons-material";

export function HeaderComponent() {
  return (
    <Container>
      <TopHeader>
        <select defaultValue={"R$"}>
          <option value={"U$"}>U$</option>
          <option value={"R$"}>R$</option>
        </select>
        <div>
          <Button color={"inherit"} variant={"text"} startIcon={<Person />}>
            Meu perfil
          </Button>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </TopHeader>
      <BottomHeader>
        <LogoContainer>
          <BlueIcon width={"2.5rem"} />
          <LogoName>E-Comm</LogoName>
        </LogoContainer>
        <MenuItems>
          <CategoryButton>
            <span>Home</span>
            <DropdownContent className="dropdown-content">
              <ul>
                <li>
                  <a href="bestseller">Mais Vendidos</a>
                </li>
                <li>
                  <a href="news">Novidades</a>
                </li>
              </ul>
            </DropdownContent>
          </CategoryButton>
          <CategoryButton>
            <span>Produtos</span>
            <DropdownContent className="dropdown-content">
              <ul>
                <li>
                  <a href="masculino">Masculinos</a>
                </li>
                <li>
                  <a href="feminino">Femininos</a>
                </li>
                <li>
                  <a href="infantil">Infantil</a>
                </li>
              </ul>
            </DropdownContent>
          </CategoryButton>
          <CategoryButton>
            <span>Promoções</span>
            <DropdownContent className="dropdown-content">
              <ul>
                <li>
                  <a href="ofertas">Ofertas</a>
                </li>
              </ul>
            </DropdownContent>
          </CategoryButton>
          <CategoryButton>
            <span>Contato</span>
          </CategoryButton>
        </MenuItems>
        <MobileMenuItems>
          <IconButton>
            <Menu />
          </IconButton>
        </MobileMenuItems>
      </BottomHeader>
    </Container>
  );
}
