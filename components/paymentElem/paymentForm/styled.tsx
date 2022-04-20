import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";

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

    @media ${baseTheme.media.big} {
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

  @media ${baseTheme.media.small} {
    margin-top: 100px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;
