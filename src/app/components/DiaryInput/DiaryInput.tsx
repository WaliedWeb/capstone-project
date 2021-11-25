import React, { useState } from 'react';
import styled from 'styled-components';

export default function DiaryInput(): JSX.Element {
  const [destination, setDestination] = useState('');
  const [memories, setMemories] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <FormBody>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Label>
          Destination:{''}
          <Input
            type="text"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
        </Label>
        <Label>
          Memories:{''}
          <Input
            type="textarea"
            value={memories}
            onChange={(event) => setMemories(event.target.value)}
          />
        </Label>
        <Button type="submit">+</Button>
      </Form>
    </FormBody>
  );
}

const FormBody = styled.article`
  display: grid;
  border: 2px solid hotpink;
  padding: 50px 20px 20px 20px;
  gap: 20px;
  margin-left: 400px;
  margin-right: 500px;
`;

const Form = styled.form`
  display: grid;
  gap: 30px;
`;

const Label = styled.label`
  display: grid;
  gap: 5px;
`;

const Input = styled.input``;

const Button = styled.button`
  padding: 10px 20px;
  justify-self: center;
  border-radius: 50%;
`;
