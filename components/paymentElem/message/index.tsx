import Link from "next/link";
import { Button } from "../../UI/button";
import { FormEventHandler } from "react";
import { ErrorElem } from "./styled";
import { CompleteIcon } from "../../icons/complete";
import { ErrorIcon } from "../../icons/error";

interface ErrorMessageProps {
  message: string;
  retry: FormEventHandler;
  err: boolean;
}

export const Message = ({ message, retry, err }: ErrorMessageProps) => {
  return (
    <ErrorElem>
      <div className="icon-container">
        {!err ? <CompleteIcon /> : <ErrorIcon />}
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
