import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { Wrapper, TeacherCollection } from '../../components/TeacherItem/styles';

function TeacherList() {
  return (
    <Wrapper>
      <PageHeader title="Proffys disponíveis" />

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
