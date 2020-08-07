import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #8257e5;
    justify-content: center;
    padding: 40px;
`;

export const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #ffff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 30px;
`;

export const Bold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const StudyButton = styled.TouchableOpacity`
  height: 110px;
  width: 48%;
  background: #9871f5;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
`;

export const GiveClassesButton = styled.TouchableOpacity`
  height: 110px;
  width: 48%;
  background: #04d361;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 20px;
  color: #ffffff;
`;

export const ConnectionsWrapper = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
