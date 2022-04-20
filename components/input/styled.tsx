import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const InputContainer = styled.div`
  margin: 0 auto;
  width: ${baseTheme.sizes.input.width};
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
    border: 3px solid ${baseTheme.colors.second};
  }

  @media ${baseTheme.media.medium} {
    width: 80%;
  }
`;
