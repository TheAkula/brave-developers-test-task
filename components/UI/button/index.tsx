import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";

export const Button = styled.button`
  display: block;
  padding: 8px;
  border: none;
  border-radius: 2px;
  background-color: ${baseTheme.colors.primary};
  color: #fff;

  cursor: pointer;

  :disabled {
    background-color: gray;
    color: lightgray;
    cursor: not-allowed;
  }
`;
