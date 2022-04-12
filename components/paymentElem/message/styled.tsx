import styled from "styled-components";

export const ErrorElem = styled.div`
  text-align: center;

  .icon {
    width: 60px;
    height: 60px;
  }

  div {
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 18px;
    color: green;
  }

  .err {
    color: #ff0800;
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
