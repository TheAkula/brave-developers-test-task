import styled from "styled-components";

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
