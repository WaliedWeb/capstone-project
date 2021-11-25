import React from 'react';
import Form from './components/DiaryInput/DiaryInput';
import Card from './components/Card/Card';

export default function App(): JSX.Element {
  return <>
    <Form />
    <Card destination={''} memories={''} />
  </>;
}
