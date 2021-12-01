import React, { useState } from 'react';
import styled from 'styled-components';

type DiaryInputProps = {
  onSubmit: (diary: { destination: string; memories: string }) => void;
};

export default function DiaryInput({ onSubmit }: DiaryInputProps): JSX.Element {
  const [destination, setDestination] = useState('');
  const [memories, setMemories] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ destination, memories });
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
          <Textarea
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
  border: 2px solid hotpink;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  font-weight: 700;
  background-color: #356ee9;
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

const Textarea = styled.textarea``;

const Button = styled.button`
  padding: 10px 20px;
  justify-self: center;
  border-radius: 50%;
`;
