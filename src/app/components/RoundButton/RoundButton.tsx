import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type RoundButtonProps = {
  handleClick: () => void;
  children: ReactNode;
  customStyles?: {
    sizeButton?: string;
    topPosition?: string;
    rightPosition?: string;
  };
};

export default function RoundButton({
  handleClick,
  children,
  customStyles,
}: RoundButtonProps): JSX.Element {
  return (
    <Button
      customStyles={customStyles ? customStyles : {}}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

interface StylingProps {
  customStyles: {
    sizeButton?: string;
    topPosition?: string;
    rightPosition?: string;
  };
}

const Button = styled.button.attrs<StylingProps>((props) => ({
  customStyles: {
    sizeButton: props.customStyles.sizeButton || '1.5rem',
    topPosition: props.customStyles.topPosition || '0.2rem',
    rightPosition: props.customStyles.rightPosition || '0.1rem',
  },
}))`
  position: absolute;
  right: ${({ customStyles }: StylingProps) => customStyles.rightPosition};
  top: ${({ customStyles }: StylingProps) => customStyles.topPosition};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ customStyles }: StylingProps) => customStyles.sizeButton};
  height: ${({ customStyles }: StylingProps) => customStyles.sizeButton};
  background: hotpink;
  border-radius: 50%;
  border: 1px solid black;
  color: white;
  font-weight: 500;
`;
