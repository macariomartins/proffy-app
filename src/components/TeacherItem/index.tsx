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


export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorite?: boolean;
}

const TeacherItem = ({ teacher, favorite }: TeacherItemProps) => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />
        <Info>
          <Name>
            {teacher.name}
          </Name>
          <Subject>
            {teacher.subject}
          </Subject>
        </Info>
      </Profile>

      <Bio>
        {teacher.bio}
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'    '}
          <PriceValue>
            R$ {teacher.cost}
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
