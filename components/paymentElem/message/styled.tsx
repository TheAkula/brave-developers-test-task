import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";

export const ErrorElem = styled.div`
  text-align: center;

  .icon {
    width: 60px;
    height: 60px;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 18px;
    color: ${baseTheme.colors.success};
  }

  .err {
    color: ${baseTheme.colors.error};
  }

  .buttons-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }

  .icon-container {
    padding-top: 100px;
  }
`;
