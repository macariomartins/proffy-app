import React, { useState } from 'react';
import { Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

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
  favorite: boolean;
}

const TeacherItem = ({ teacher, favorite }: TeacherItemProps) => {

  const [isFavorite, setIsFavorite] = useState(favorite);

  async function handleToggleFavorite() {
    let favoritesArray = [];
    const favorites = await AsyncStorage.getItem('favorites');

    if (favorites)
      favoritesArray = JSON.parse(favorites);

    if (isFavorite) {
      const newFavoritesArray = favoritesArray.filter((favoriteTeacher: Teacher) => {
        return favoriteTeacher.id !== teacher.id
      });

      await AsyncStorage.setItem('favorites', JSON.stringify(newFavoritesArray));

      setIsFavorite(false);
    } else {
      favoritesArray.push(teacher);

      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

      setIsFavorite(true);
    }
  }

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id
    });

    Linking.openURL(`whatsapp://send?phone=55${teacher.whatsapp}`);
  }

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
            !isFavorite && (
              <FavoriteButton onPress={handleToggleFavorite}>
                <Image source={outlineHeartIcon} />
              </FavoriteButton>
            )
          }
          {
            isFavorite && (
              <UnfavoriteButton onPress={handleToggleFavorite}>
                <Image source={unfavoriteIcon} />
              </UnfavoriteButton>
            )
          }
          <ContactButton onPress={handleLinkToWhatsapp}>
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
