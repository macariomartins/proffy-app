import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { Wrapper, TeacherCollection } from '../../components/TeacherItem/styles';

function Favorites() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<Number[]>([]);

  function loadFavoriteTeachers() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        });

        setFavorites(favoritedTeachersIds);
        setTeachers(favoritedTeachers);
      }
    });
  }

  useEffect(() => {
    loadFavoriteTeachers();
  }, []);

  return (
    <Wrapper>
      <PageHeader title="Meus proffys favoritos" />

      <TeacherCollection
        contentContainerStyle={{
          paddingBottom: 16,
          paddingHorizontal: 16
        }}
      >
        {
          teachers.map((teacher: Teacher) => (
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

export default Favorites;
