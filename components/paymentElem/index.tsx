import { useState, FormEventHandler } from "react";

import { Layout } from "../layout";
import { OperatorProps } from "../../pages/operators/[id]";
import { PaymentForm } from "./paymentForm";
import { Spinner } from "../UI/spinner";
import { Message } from "./message";
import { PaymentElem, SpinnerContainer } from "./styled";
import { useSubmit } from "../../hooks/useSubmit";
import { Header } from "./header";
import { TransitionContainer } from "./transitionContainer";

export const Payment = ({ id, title, imgUrl }: OperatorProps) => {
  const [phoneValue, setPhoneValue] = useState("");
  const [sumValue, setSumValue] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [level, setLevel] = useState(0);
  const [isFailed, setIsFailed] = useState(false);
  const [message, setMessage] = useState("");
  const submit = useSubmit();

  const onPhoneChangedHandler = (newPhone: string) => {
    setPhoneValue(newPhone);
  };
  const onSumChangedHandler = (newSum: string) => {
    setSumValue(newSum);
  };

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setIsFailed(false);
    setMessage("");
    setLevel(1);
    submit({ phone: phoneValue, sum: sumValue, id: id })
      .then((data) => {
        if (data.error) {
          setMessage(data.error);
          return setIsFailed(true);
        }
        setIsPaid(true);
        setMessage(data.message);
        setLevel(2);
      })
      .catch((err) => {
        setMessage("Произошла ошибка :(");
        setIsFailed(true);
      });
  };

  return (
    <Layout>
      <PaymentElem>
        <Header isFailed={isFailed} isPaid={isPaid} level={level} />
        <TransitionContainer level={level}>
          {level === 0 ? (
            <PaymentForm
              setSum={onSumChangedHandler}
              setPhone={onPhoneChangedHandler}
              curPhone={phoneValue}
              curSum={sumValue}
              submited={onSubmitHandler}
              imgUrl={imgUrl}
              title={title}
            />
          ) : level === 1 && !isFailed ? (
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          ) : (
            <Message err={isFailed} message={message} retry={onSubmitHandler} />
          )}
        </TransitionContainer>
      </PaymentElem>
    </Layout>
  );
};
