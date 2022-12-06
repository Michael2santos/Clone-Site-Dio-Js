import React from 'react'
import {CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture} from './styles';
import {FiThumbsUp} from 'react-icons/fi';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://images4.alphacoders.com/110/110948.jpg'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/92458591?s=400&u=7a8be6729e8a819fbc338b34f9554209e9b1d24f&v=4'/>
                <div>
                    <h4>Michael Santos</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de Html e Css</h4>
                <p>Projeto feito o curso React no bootcamp Orange Tech <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#Html #Css #JavaScript</h4>
                <p>
                    <FiThumbsUp/> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card};