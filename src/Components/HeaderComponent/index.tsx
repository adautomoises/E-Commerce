//import React, { useState, useEffect } from 'react';
import {
  Header,
  TopHeader,
  BottomHeader,
  LogoContainer,
  LogoName,
  MenuItems,
  CategoryButton,
  MobileMenuItems,
} from "./styles";
import { ReactComponent as BlueIcon } from "../../Assets/blue_icon.svg";
import { Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, Person } from "@mui/icons-material";

export function HeaderComponent() {
  return (
    <Header>
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
          <CategoryButton>Home</CategoryButton>
          <CategoryButton>Produtos</CategoryButton>
          <CategoryButton>Promoções</CategoryButton>
          <CategoryButton>Contato</CategoryButton>
        </MenuItems>
        <MobileMenuItems>
          <IconButton>
            <Menu />
          </IconButton>
        </MobileMenuItems>
      </BottomHeader>
    </Header>
  );
}
