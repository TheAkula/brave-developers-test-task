import styled from "styled-components";
import { baseTheme } from "../../../../styles/theme";

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
    color: ${baseTheme.colors.text};
  }

  input {
    padding: 6px;
    border-radius: 0;
    border: 2px solid #808080;
    outline: none;
  }

  input:focus {
    border: 2px solid ${baseTheme.colors.second};
  }

  input:last-of-type {
    width: 150px;
  }

  @media ${baseTheme.media.small} {
    flex-direction: column;
    gap: 20px;
  }
`;
