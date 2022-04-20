import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const HeaderInner = styled.div`
  height: ${baseTheme.sizes.header.height};
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.header`
  background-color: #fff;
`;
