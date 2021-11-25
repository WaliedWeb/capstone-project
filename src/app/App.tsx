import React, { useState } from 'react';
import Card from './components/Card/Card';
import DiaryInput from './components/DiaryInput/DiaryInput';

export default function App(): JSX.Element {
  const [diaries, setDiaries] = useState([
    {
      destination: 'Paris',
      memories: "it's a beautiful city",
    },
  ]);

  function handleSubmit(diary: { destination: string; memories: string }) {
    const newDiaries = [...diaries];
    newDiaries.push(diary);
    setDiaries(newDiaries);
  }

  return (
    <div>
      <DiaryInput onSubmit={handleSubmit} />
      {diaries.map((diary) => (
        <Card destination={diary.destination} memories={diary.memories} />
      ))}
    </div>
  );
}
