import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DiaryInput from '../components/DiaryInput/DiaryInput';
import useLocalStorage from '../hooks/useLocalStorage';

type Diary = {
  destination: string;
  date: string;
  memories: string;
  image: string;
};

export default function AddDiary(): JSX.Element {
  const [diaries, setDiaries] = useLocalStorage<Diary[]>('diaries', []);
  const navigate = useNavigate();

  function handleSubmit(diary: {
    destination: string;
    date: string;
    memories: string;
    image: string;
  }) {
    const newDiaries = [...diaries];
    newDiaries.push(diary);
    setDiaries(newDiaries);
    navigate('/');
  }

  return (
    <Container>
      <Div>
        <DiaryInput onSubmit={handleSubmit} />
      </Div>
    </Container>
  );
}

const Container = styled.div`
  height: 94vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Div = styled.div`
  display: grid;
`;
