import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Title,
  Description,
  OkButton,
  ButtonText
} from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      <Content
        source={giveClassesBgImage}
        resizeMode="contain"
      >
        <Title>
          Quer ser um Proffy?
        </Title>
        <Description>
          Para começar, você precisa se cadastrar
          na nossa plataforma web.
        </Description>
      </Content>

      <OkButton onPress={handleNavigateBack}>
        <ButtonText>
          Tudo bem
        </ButtonText>
      </OkButton>
    </Container>
  );
}

export default GiveClasses;
