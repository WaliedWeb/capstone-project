import React, { useState } from 'react';
import styled from 'styled-components';
import UploadImage from '../UploadImage/UploadImage';

type DiaryInputProps = {
  onSubmit: (diary: {
    destination: string;
    date: string;
    memories: string;
    image: string;
  }) => void;
};

export default function DiaryInput({ onSubmit }: DiaryInputProps): JSX.Element {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [memories, setMemories] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ destination, date, memories, image });
  }

  return (
    <FormBody>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Label>
          Destination:
          <Input
            type="text"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
        </Label>
        <Label>
          Date:
          <Input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </Label>
        <Label>
          Memories:
          <Textarea
            value={memories}
            onChange={(event) => setMemories(event.target.value)}
          />
        </Label>
        <Label>
          Image:
          <UploadImage onUpload={(url) => setImage(url)} />
        </Label>
        <Button type="submit">+</Button>
      </Form>
    </FormBody>
  );
}

const FormBody = styled.article`
  border: 2px solid #5adeff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  font-weight: 700;
  background-color: #00bdfe;
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
