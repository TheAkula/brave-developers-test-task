import styled from "styled-components";

export const StyledLink = styled.a`
  display: block;
  width: 170px;
  height: 200px;
  background-color: #fff;
  text-decoration: none;
  color: black;
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

  @media screen and (max-width: 500px) {
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

  @media screen and (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`;
