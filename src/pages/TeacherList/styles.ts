import React from 'react';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const ToggleFiltersButton = styled(BorderlessButton)`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`;

export const Input = styled.TextInput`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin: 4px 0 16px 0;
`;

export const Select = styled.View`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin: 4px 0 16px 0;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #04d361;
  flex-direction: row;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
`;
