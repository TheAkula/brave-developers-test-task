import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";

export const StyledLink = styled.a`
  display: block;
  width: 170px;
  height: 200px;
  background-color: #fff;
  text-decoration: none;
  color: ${baseTheme.colors.text};
  border-radius: 2px;
  text-align: center;
  padding-top: 30px;
  border-radius: 6px;
  transition: background-color 0.1s;

  :hover {
    background-color: #fffdd6;
  }

  h3 {
    font-size: 1em;
  }

  @media ${baseTheme.media.medium} {
    width: 120px;
    height: 160px;
  }
`;

export const ImageContainer = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto;

  img {
    height: 100%;
  }

  @media ${baseTheme.media.medium} {
    width: 60px;
    height: 60px;
  }
`;
