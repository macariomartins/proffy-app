import React, { useState, FormEvent, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

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
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('-1');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<Number[]>([]);

  async function searchTeachers() {
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  function loadFavoriteTeachers() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        });

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function hangleToggleFilters() {
    setFiltersAreVisible(!filtersAreVisible);
  }

  function handleFilterSubmit() {
    searchTeachers();
    setFiltersAreVisible(false);
  }

  function convertTextToTime(text: string) {
    // const onlyNumbers = text
    //   .replace(/\D/g, '')
    //   .substr(0, 4);

    // const remainingSpace = 4 - onlyNumbers.length;
    // let time = onlyNumbers;

    // for (let emptyPosition = 1; emptyPosition <= remainingSpace; emptyPosition++)
    //   time += '0';

    // return time
    //   .split('')
    //   .map((number, index) => {
    //     if (index === 2)
    //       return `:${number}`;
    //   })
    //   .join();
    return text;
  }

  useEffect(() => {
    searchTeachers();
    loadFavoriteTeachers();
  }, []);

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
                value={subject}
                onChangeText={text => setSubject(text)}
              />

              <InputGroup>
                <InputBlock>
                  <Label>Dia da semana</Label>
                  <Select>
                    <Picker selectedValue={week_day} onValueChange={value => setWeekDay(value)}>
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
                    value={time}
                    onChangeText={text => {
                      setTime(convertTextToTime(text))
                    }}
                  />
                </InputBlock>
              </InputGroup>

              <SubmitButton onPress={handleFilterSubmit}>
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
        {
          teachers.map((teacher: Teacher, index) => (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorite={favorites.includes(teacher.id)}
            />
          ))
        }
      </TeacherCollection>
    </Wrapper>
  );
}

export default TeacherList;
