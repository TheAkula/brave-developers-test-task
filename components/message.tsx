import styled from "styled-components";
import Link from "next/link";
import Button from "./UI/button";
import { FormEventHandler } from "react";

interface ErrorMessageProps {
  message: string;
  retry: FormEventHandler;
  err: boolean;
}

const ErrorElem = styled.div`
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

const ErrorMessage = ({ message, retry, err }: ErrorMessageProps) => {
  return (
    <ErrorElem>
      <div className="icon-container">
        {!err ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="green"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="red"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}

        <p className={err ? "err" : ""}>{message}</p>
      </div>
      <div className="buttons-container">
        {err && <Button onClick={retry}>Повторить</Button>}
        <Link href="/">
          <a>Вернуться на главную</a>
        </Link>
      </div>
    </ErrorElem>
  );
};

export default ErrorMessage;
