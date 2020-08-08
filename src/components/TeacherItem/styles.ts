import React from 'react';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const TeacherCollection = styled(ScrollView)`
  margin-top: -60px;
`;

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const Info = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 20px;
  color: #32264d;
`;

export const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  margin-top: 4px;
  color: #6a6180;
`;

export const Bio = styled.Text`
  margin: 0 24px 24px 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a1680;
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  color: #6a6180;
`;

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  color: #8257e5;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)`
  background-color: #8257e5;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const UnfavoriteButton = styled(RectButton)`
  background-color: #e33d3d;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  background-color: #04d361;
  flex: 1;
  flex-direction: row;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;
