import Image from "next/image";
import { useState, useRef, useEffect, FormEventHandler } from "react";
import {
  KeyboardEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
} from "react";
import Link from "next/link";
import { Button } from "../../UI/button";
import {
  PaymentContent,
  ImageContainer,
  PaymentFooter,
  Operator,
  Line,
} from "./styled";
import { Input } from "./input";
import { usePhoneNumber } from "../../../hooks/usePhoneNumber";
import { useValidate } from "../../../hooks/useValidate";

interface PaymentFormProps {
  submited: FormEventHandler;
  setSum: (sum: string) => void;
  setPhone: (phone: string) => void;
  curPhone: string;
  curSum: string;
  imgUrl: string;
  title: string;
}

export const PaymentForm = ({
  submited,
  setPhone,
  setSum,
  curPhone,
  curSum,
  imgUrl,
  title,
}: PaymentFormProps) => {
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [sumIsTouched, setSumIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [sumIsValid, setSumIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const phoneNumberRef = useRef<null | HTMLInputElement>(null);
  const [key, setKey] = useState(0);
  const changePhoneNumber = usePhoneNumber();
  const validate = useValidate();

  useEffect(() => {
    validate(curPhone, setPhoneIsValid, setSumIsValid, curSum, setFormIsValid);
  }, [curPhone, curSum, validate]);

  useEffect(() => {
    const number = window.localStorage.getItem("number");
    const sum = window.localStorage.getItem("sum");
    if (number || sum) {
      setPhone(number!);
      setSum(sum!);
    }
    window.localStorage.setItem("number", "");
    window.localStorage.setItem("sum", "");
  }, [setPhone, setSum]);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    setKey(e.keyCode);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    changePhoneNumber(phoneNumberRef, key, setPhone, e.target!.value);
  };

  const onSumChangedHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (+e.target.value >= 0 && +e.target.value <= 1000) {
      setSum(e.target.value);
    }
  };

  const onPhoneFocused: FocusEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value) {
      setPhone("+7");
    }
    setPhoneIsTouched(false);
  };

  const onPhoneBlured: FocusEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length <= 3) {
      return setPhone("");
    }
    setPhoneIsTouched(true);
  };

  const onOperatorChange = () => {
    window.localStorage.setItem("number", curPhone);
    window.localStorage.setItem("sum", curSum);
  };

  return (
    <div>
      <form onSubmit={submited}>
        <PaymentContent>
          <div className="form-content">
            <div>
              <Input
                inpRef={phoneNumberRef}
                value={curPhone}
                onBlur={onPhoneBlured}
                onFocus={onPhoneFocused}
                id="phone"
                name="phone"
                onChange={onChange}
                placeholder={"Введите номер"}
                valid={phoneIsValid}
                touched={phoneIsTouched}
                title="Телефон"
                errorMessage="*Телефон введен не полностью"
                type="text"
                onKeyDown={onKeyDown}
              />
              <Input
                value={curSum}
                onBlur={() => setSumIsTouched(true)}
                onFocus={() => setSumIsTouched(false)}
                id="sum"
                name="sum"
                onChange={onSumChangedHandler}
                placeholder={"Введите сумму"}
                valid={sumIsValid}
                touched={sumIsTouched}
                title="Сумма"
                errorMessage="*Размер суммы должен быть в пределах от 1 до 1000"
                type="number"
              />
            </div>
            <Operator>
              <ImageContainer>
                <Image
                  src={imgUrl}
                  alt={title}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </ImageContainer>
              <Link href="/">
                <a onClick={onOperatorChange}>Другой оператор</a>
              </Link>
            </Operator>
          </div>
          <PaymentFooter>
            <Line />
            <div className="buttons-container">
              <Link href="/">На главную</Link>
              <Button type="submit" disabled={!formIsValid}>
                Оплатить
              </Button>
            </div>
          </PaymentFooter>
        </PaymentContent>
      </form>
    </div>
  );
};
