import { ChangeEventHandler } from "react";
import { InputContainer } from "./styled";

interface InputProps {
  curValue: string;
  changed: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ curValue, changed }: InputProps) => {
  return (
    <InputContainer>
      <input type="text" value={curValue} onChange={changed} maxLength={20} />
    </InputContainer>
  );
};
