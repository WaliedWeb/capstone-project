import React from 'react';
import type { ChangeEvent } from 'react';

type ImageUploadProps = {
  onUpload: (image: string) => void;
};

export default function UploadImage({
  onUpload,
}: ImageUploadProps): JSX.Element {
  async function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 't4titqw4');

    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dk8czxaai/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const cloudinaryResponse = await response.json();
    onUpload(cloudinaryResponse.url);
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
}
