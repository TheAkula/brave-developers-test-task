import { RefObject } from "react";
import { InputContainer } from "./styled";
import { InputErrorMessage } from "./inputErrorMessage/index";
import {
  FocusEventHandler,
  ChangeEventHandler,
  KeyboardEventHandler,
} from "react";

interface InputProps {
  inpRef?: RefObject<HTMLInputElement>;
  value: string;
  onBlur: FocusEventHandler<HTMLInputElement>;
  onFocus: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
  name: string;
  placeholder: string;
  title: string;
  valid: boolean;
  touched: boolean;
  errorMessage: string;
  type: string;
}

export const Input = (props: InputProps) => {
  return (
    <InputContainer>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        ref={props.inpRef}
        value={props.value}
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      />
      {!props.valid && props.touched && (
        <InputErrorMessage>{props.errorMessage}</InputErrorMessage>
      )}
    </InputContainer>
  );
};
