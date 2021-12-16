import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import useLocalStorage from '../hooks/useLocalStorage';

type Diary = {
  destination: string;
  date: string;
  memories: string;
  image: string;
};

export default function Dashboard(): JSX.Element {
  const [diaries, setDiaries] = useLocalStorage<Diary[]>('diaries', []);

  function deleteDiary(diary: {
    destination: string;
    date: string;
    memories: string;
    image: string;
  }) {
    const newDiarylist = diaries.filter((singleDiary) => singleDiary !== diary);
    setDiaries(newDiarylist);
  }

  return (
    <Container>
      <Cardcontainer>
        {diaries &&
          diaries.map((diary, key) => (
            <Card
              diary={diary}
              key={`${diary.destination}-${key}`}
              deleteCard={() => deleteDiary(diary)}
            />
          ))}
      </Cardcontainer>
    </Container>
  );
}

const Container = styled.div`
  height: 94vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Cardcontainer = styled.div`
  overflow-y: auto;
`;

const Button = styled.button``;
