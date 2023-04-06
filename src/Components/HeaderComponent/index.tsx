import { useState } from "react";
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
import { Button, IconButton, Box, SwipeableDrawer } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { House, Menu, Person } from "@mui/icons-material";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ContactsIcon from "@mui/icons-material/Contacts";

export function HeaderComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleMobileMenu = () => {
    setIsDrawerOpen(true);
  };

  const getIconList = (text: string) => {
    switch (text) {
      case "Produto":
        return <WidgetsIcon />;
      case "Promoções":
        return <LocalOfferIcon />;
      case "Contato":
        return <ContactsIcon />;
    }
  };

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
          <IconButton onClick={handleToggleMobileMenu}>
            <Menu />
          </IconButton>
          <SwipeableDrawer
            anchor={"right"}
            open={isDrawerOpen}
            onOpen={() => {
              setIsDrawerOpen(true);
            }}
            onClose={() => {
              setIsDrawerOpen(false);
            }}
          >
            <Box
              sx={{ width: 250, textAlign: "center" }}
              role="presentation"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
              onKeyDown={() => {
                setIsDrawerOpen(false);
              }}
            >
              <Button disabled startIcon={<House />}>
                Home
              </Button>
              <Divider />
              <List>
                {["Produto", "Promoções", "Contato"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{getIconList(text)}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </SwipeableDrawer>
        </MobileMenuItems>
      </BottomHeader>
    </Container>
  );
}
