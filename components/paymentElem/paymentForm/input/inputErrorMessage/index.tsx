import styled from "styled-components";
import { baseTheme } from "../../../../../styles/theme";

export const InputErrorMessage = styled.p`
  position: absolute;
  left: 0;
  top: 100%;
  color: ${baseTheme.colors.error};
  font-size: 12px;
  transform: translateY(6px);
  width: 250px;
`;
