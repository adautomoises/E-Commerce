//import React, { useState, useEffect } from 'react';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { Container } from './styles';

export function Login() {
 return(
 <Container>
  <Input iconName="Person" type="text" name="nick" placeholder="Login" />
  <Input iconName="Lock" type="password" name="password" placeholder="Senha" />
  <Input iconName="Lock" type="password" name="password" placeholder="Confirmar senha" />

  <Button color={'white'} type={'button'} backgroundColor={'blue'} label={"Clique aqui"}/>
  <Button color={'white'} type={'button'} backgroundColor={'green'} label={"Confirmar"}/>
  <Button color={'white'} type={'button'} backgroundColor={'red'} label={"Remover"}/>
 </Container>
 );
};