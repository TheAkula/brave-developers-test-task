import { ChangeEventHandler, useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  margin: 0 auto;
  width: 400px;
  margin-top: 40px;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 3px solid #bfe3ff;
    outline: none;
    font-size: 18px;
  }

  input:focus {
    border: 3px solid #ffef00;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

interface InputProps {
  curValue: string;
  changed: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ curValue, changed }: InputProps) => {
  return (
    <InputContainer>
      <input type="text" value={curValue} onChange={changed} maxLength={20} />
    </InputContainer>
  );
};

export default Input;
