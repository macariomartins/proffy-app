import React from 'react';
import { Image } from 'react-native';

import outlineHeartIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  Avatar,
  Info,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  UnfavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styles';

interface TeacherItemProps {
  favorite?: boolean;
}

const TeacherItem = ({ favorite }: TeacherItemProps) => {
  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
          }}
        />
        <Info>
          <Name>
            John Doe
          </Name>
          <Subject>
            Chemestry
          </Subject>
        </Info>
      </Profile>

      <Bio>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Inventore modi explicabo nesciunt veniam similique esse ullam
        maxime numquam. Aspernatur officiis reiciendis, porro assumenda
        natus voluptatem dolores id culpa voluptatum tenetur!
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'    '}
          <PriceValue>
            R$ 80,00
          </PriceValue>
        </Price>

        <ButtonsContainer>
          {
            !favorite && (
              <FavoriteButton>
                <Image source={outlineHeartIcon} />
              </FavoriteButton>
            )
          }
          {
            favorite && (
              <UnfavoriteButton>
                <Image source={unfavoriteIcon} />
              </UnfavoriteButton>
            )
          }
          <ContactButton>
            <Image source={whatsappIcon} />

            <ContactButtonText>
              Entrar em contato
            </ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;
