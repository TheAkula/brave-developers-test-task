import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const PaymentElem = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  overflow: hidden;
  border-radius: 6px;
  height: 650px;
  position: relative;

  @media ${baseTheme.media.large} {
    width: 90%;
  }
`;

export const SpinnerContainer = styled.div`
  margin: 40px auto 0 auto;
`;
