import React from 'react'
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styles';
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/144366835?v=4'/>
          <div>
            <h4>Helder Daniel</h4>
            <p>Há 7 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projecto nodeJs para a gestão de matrícula de alunos</h4>
          <p>Projecto realizado para a gestão de matriculas usando nodeJS React e MUI.. <strong>Saiba mais</strong> </p>
        </PostInfo>
        <HasInfo>
          <h4>
            #Node #React #Mui #JS
          </h4>
          <p>
            <FiThumbsUp /> 7
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card };