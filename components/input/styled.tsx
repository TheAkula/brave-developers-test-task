import styled from "styled-components";

export const InputContainer = styled.div`
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
