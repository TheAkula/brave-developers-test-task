import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 8px;
  border: none;
  border-radius: 2px;
  background-color: #0090ff;
  color: #fff;

  cursor: pointer;

  :disabled {
    background-color: gray;
    color: lightgray;
    cursor: not-allowed;
  }
`;

export default Button;
