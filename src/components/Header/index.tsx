import React from "react";
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
import { IHeader } from "./types";

const Header = ({autentificado}:IHeader) => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login')
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {autentificado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>  
        <Row>
          {autentificado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/105506000?v=4" />
          ) : ( 
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn} />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
