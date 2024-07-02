import React from 'react';
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png';
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from './styles';

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='Logo da dio' />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar....' />
              </BuscarInputContainer>
              <Menu>Live Coding</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/144366835?v=4' />
          ) : (
            <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title='Entrar' />
              <Button title='Registar' />
            </>

          )}

        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }