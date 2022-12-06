import React from 'react';
import {Button} from '../Button'
import logodio from "../../assets/logo-dio.png";

import {BuscarInputContainer,
        Container,
        Input,
        Menu,
        MenuRight,
        Row,
        UserPicture,
        Wrapper
} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logodio} alt="logo da dio" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ): null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/92458591?s=400&u=7a8be6729e8a819fbc338b34f9554209e9b1d24f&v=4'/>
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    </>
                )}
                
                
            </Row>
        </Container>
    </Wrapper>
    )
}

export {Header};
