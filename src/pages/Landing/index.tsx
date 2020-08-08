import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigationToGiveClassesPage() {
    console.log('Navegar para GiveClasses');
    navigate('GiveClasses');
  }

  function handleNavigationToStudyPages() {
    console.log('Navegar para study');
    navigate('Study');
  }

  return (
    <Container>
      <Banner source={landingImg} resizeMode="contain" />
      <Title>
        Seja bem-vindo(a), {'\n'}
        <Bold>
          O que deseja fazer?
        </Bold>
      </Title>

      <ButtonsContainer>
        <StudyButton onPress={handleNavigationToStudyPages}>
          <Image source={studyIcon} />
          <ButtonText>
            Estudar
          </ButtonText>
        </StudyButton>

        <GiveClassesButton onPress={handleNavigationToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <ButtonText>
            Dar aulas
          </ButtonText>
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
