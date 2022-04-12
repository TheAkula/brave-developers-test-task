import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  :first-of-type {
    margin-bottom: 40px;
  }
  label {
    font-size: 1em;
    color: rgb(30, 30, 30);
  }

  input {
    padding: 6px;
    border-radius: 0;
    border: 2px solid #808080;
    outline: none;
  }

  input:focus {
    border: 2px solid #ffef00;
  }

  input:last-of-type {
    width: 150px;
  }

  @media screen and (max-width: 340px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Operator = styled.div`
  text-align: center;
  width: 300px;

  a {
    text-decoration: none;
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-bottom: 5px;

  img {
    height: 100%;
  }
`;

export const PaymentContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;

  .form-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 40px;

    @media screen and (max-width: 680px) {
      justify-content: center;
      gap: 40px;
    }
  }
`;

export const PaymentFooter = styled.div`
  width: 100%;
  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    padding-bottom: 0;
    flex-wrap: wrap;
    margin-top: auto;
  }

  a {
    text-decoration: none;
    font-size: 0.9em;
  }

  @media screen and (max-width: 340px) {
    margin-top: 100px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;
