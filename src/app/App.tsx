import React from 'react';
import styled from 'styled-components';
import Card from './components/Card/Card';
import DiaryInput from './components/DiaryInput/DiaryInput';
import useLocalStorage from './hooks/useLocalStorage';

type Diary = { destination: string; memories: string}

export default function App(): JSX.Element {
  const [diaries, setDiaries] = useLocalStorage<
    Diary[] 
  >("diaries", []);

  function handleSubmit(diary: { destination: string; memories: string }) {
    const newDiaries = [...diaries];
    newDiaries.push(diary);
    setDiaries(newDiaries);
  }

  function deleteDiary(diary: { destination: string; memories: string }) {
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
      <Div>
        <DiaryInput onSubmit={handleSubmit} />
      </Div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Cardcontainer = styled.div`
  overflow-y: auto;
`;

const Div = styled.div`
  display: grid;
`;