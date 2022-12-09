import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  HasInfo,
  PostInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
          <div>
            <h4>Flávio</h4>
            <p>Há 10 minutos.</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS.</h4>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML, #CSS, #Javascript</h4>
          <p>
            <FiThumbsUp /> 13
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export {Card};