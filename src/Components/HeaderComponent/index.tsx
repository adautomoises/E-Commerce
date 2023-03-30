//import React, { useState, useEffect } from 'react';
import { Header, MenuItems } from './styles';
import { ReactComponent as BlueIcon } from '../../Assets/blue_icon.svg';
import { Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Person } from '@mui/icons-material';

export function HeaderComponent() {
  return (
    <Header>
      <section>
        <select defaultValue={'R$'}>
          <option value={'U$'}>U$</option>
          <option value={'R$'}>R$</option>
        </select>
        <div>
          <Button color={'inherit'} variant={'text'} startIcon={<Person />}>
            Meu perfil
          </Button>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </section>
      <section>
        <div>
          <BlueIcon width={'3rem'} />
          <span>E-Commerce</span>
        </div>
        <MenuItems>
          <button>Home</button>
          <button>Produtos</button>
          <button>Promoções</button>
          <button>Contato</button>
        </MenuItems>
      </section>
    </Header>
  );
}