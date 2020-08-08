import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { Wrapper, TeacherCollection } from '../../components/TeacherItem/styles';


function Favorites() {
  return (
    <Wrapper>
      <PageHeader title="Meus proffys favoritos" />

      <TeacherCollection
        contentContainerStyle={{
          paddingBottom: 16,
          paddingHorizontal: 16
        }}
      >
        <TeacherItem favorite={true} />
        <TeacherItem favorite={true} />
        <TeacherItem favorite={true} />
        <TeacherItem favorite={true} />
        <TeacherItem favorite={true} />
      </TeacherCollection>
    </Wrapper>
  );
}

export default Favorites;
