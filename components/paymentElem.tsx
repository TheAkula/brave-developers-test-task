import { useState, FormEventHandler, useRef } from "react";
import styled from "styled-components";

import Layout from "./layout";
import Container from "./container";
import { OperatorProps } from "../pages/operators/[id]";
import PaymentForm from "./paymentForm";
import LevelBar from "./levelBar";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Spinner from "./UI/spinner";
import Message from "./message";

const PaymentElem = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  overflow: hidden;
  border-radius: 6px;
  height: 650px;
  position: relative;

  @media screen and (max-width: 860px) {
    width: 90%;
  }
`;

const PaymentHeader = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 1.2em;
  }
`;

const Wrapper = styled.div`
  &.fade-enter {
    transform: translateX(100%);
  }
  &.fade-enter-active {
    transform: translateX(0);
    transition: transform 500ms;
  }
  &.fade-exit {
    transform: translateX(0);
  }
  &.fade-exit-active {
    transform: translateX(-100%);
    transition: transform 500ms;
  }
`;

const SpinnerContainer = styled.div`
  margin: 40px auto 0 auto;
`;

const Payment = ({ id, title, imgUrl }: OperatorProps) => {
  const [phoneValue, setPhoneValue] = useState("");
  const [sumValue, setSumValue] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [level, setLevel] = useState(0);
  const [isFailed, setIsFailed] = useState(false);
  const [message, setMessage] = useState("");
  const nodeRef = useRef<null | HTMLDivElement>(null);

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
    fetch("/api/pay", {
      method: "POST",
      body: JSON.stringify({ phone: phoneValue, sum: sumValue, id: id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
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
        <div>
          <Container>
            <PaymentHeader>
              <p>Мобильный телефон</p>
            </PaymentHeader>
            <LevelBar level={level} failed={isFailed} paid={isPaid} />
          </Container>
        </div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={level}
            addEndListener={(done) =>
              nodeRef.current!.addEventListener("transitionend", done, false)
            }
            classNames="fade"
            nodeRef={nodeRef}
          >
            <Wrapper ref={nodeRef}>
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
                <Message
                  err={isFailed}
                  message={message}
                  retry={onSubmitHandler}
                />
              )}
            </Wrapper>
          </CSSTransition>
        </SwitchTransition>
      </PaymentElem>
    </Layout>
  );
};

export default Payment;
