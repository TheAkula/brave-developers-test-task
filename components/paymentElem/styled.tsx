import styled from "styled-components";

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

  @media screen and (max-width: 860px) {
    width: 90%;
  }
`;

export const PaymentHeader = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 1.2em;
  }
`;

export const Wrapper = styled.div`
  &.fade-enter {
    transform: translateX(100%);
  }
  &.fade-enter-active {
    transform: translateX(0);
    transition: transform 500ms;
  }
  &.fade-exit {
    transform: translateX(0);
  }
  &.fade-exit-active {
    transform: translateX(-100%);
    transition: transform 500ms;
  }
`;

export const SpinnerContainer = styled.div`
  margin: 40px auto 0 auto;
`;
