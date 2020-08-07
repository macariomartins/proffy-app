import React from 'react';
import { Image, Text, Button } from 'react-native';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import {
  Container,
  Banner,
  Title,
  Bold,
  ButtonsContainer,
  StudyButton,
  GiveClassesButton,
  ButtonText,
  ConnectionsWrapper
} from './styles';

function Landing() {
  return (
    <Container>
      <Banner source={landingImg} />
      <Title>
        Seja bem-vindo(a), {'\n'}
        <Bold>
          O que deseja fazer?
        </Bold>
      </Title>

      <ButtonsContainer>
        <StudyButton>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </StudyButton>

        <GiveClassesButton>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </GiveClassesButton>
      </ButtonsContainer>

      <ConnectionsWrapper>
        Total de 285 conexões já realizadas {' '}
        <Image source={heartIcon} />
      </ConnectionsWrapper>
    </Container>
  );
}

export default Landing;
