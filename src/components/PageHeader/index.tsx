import React, { ReactNode } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  TopBar,
  Header,
  PageTitle,
  GoBackButton
} from './styles';

import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
  children?: any;
}

const PageHeader = ({ title, children, headerRight }: PageHeaderProps) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <GoBackButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </GoBackButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Header>
        <PageTitle>
          {title}
        </PageTitle>

        {headerRight}
      </Header>

      {children}
    </Container>
  )
}

export default PageHeader;
