import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import {
  Wrapper,
  TeacherCollection
} from '../../components/TeacherItem/styles';

import {
  SearchForm,
  ToggleFiltersButton,
  Label,
  Input,
  Select,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText
} from './styles';


function TeacherList() {
  const [filtersAreVisible, setFiltersAreVisible] = useState(false);

  function hangleToggleFilters() {
    setFiltersAreVisible(!filtersAreVisible);
  }

  return (
    <Wrapper>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <ToggleFiltersButton onPress={hangleToggleFilters}>
            <Feather name="filter" size={20} color="#fff" />
          </ToggleFiltersButton>
        )}
      >
        {
          filtersAreVisible && (
            <SearchForm>
              <Label>Matéria</Label>
              <Input
                placeholder='Matéria'
                placeholderTextColor='#c1bccc'
              />

              <InputGroup>
                <InputBlock>
                  <Label>Dia da semana</Label>
                  <Select>
                    <Picker>
                      <Picker.Item value="0" label="Domingo" />
                      <Picker.Item value="1" label="Segunda-feira" />
                      <Picker.Item value="2" label="Terça-feira" />
                      <Picker.Item value="3" label="Quarta-feira" />
                      <Picker.Item value="4" label="Quinta-feira" />
                      <Picker.Item value="5" label="Sexta-feira" />
                      <Picker.Item value="6" label="Sábado" />
                    </Picker>
                  </Select>
                </InputBlock>

                <InputBlock>
                  <Label>Horário</Label>
                  <Input
                    placeholder='Hora'
                    placeholderTextColor='#c1bccc'
                  />
                </InputBlock>
              </InputGroup>

              <SubmitButton>
                <SubmitButtonText>
                  Filtrar
                </SubmitButtonText>
              </SubmitButton>
            </SearchForm>
          )
        }
      </PageHeader>

      <TeacherCollection
        contentContainerStyle={{
          paddingBottom: 16,
          paddingHorizontal: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeacherCollection>
    </Wrapper>
  );
}

export default TeacherList;
