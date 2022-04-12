import InputErrorMessage from "./inputErrorMessage";
import Image from "next/image";
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  FormEventHandler,
} from "react";
import {
  KeyboardEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
} from "react";
import Link from "next/link";
import Button from "../../UI/button";
import {
  PaymentContent,
  InputContainer,
  ImageContainer,
  PaymentFooter,
  Operator,
  Line,
} from "./styled";

interface PaymentFormProps {
  submited: FormEventHandler;
  setSum: (sum: string) => void;
  setPhone: (phone: string) => void;
  curPhone: string;
  curSum: string;
  imgUrl: string;
  title: string;
}

const PaymentForm = ({
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

  const onChangedPhoneValue: KeyboardEventHandler<HTMLInputElement> = (e) => {
    setKey(e.keyCode);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let prevPosition = phoneNumberRef.current!.selectionStart;
    const coef = key === 8 ? -1 : key === 46 ? 0 : 1;
    if (prevPosition === 1) {
      prevPosition = 4;
    } else if (
      key !== 8 &&
      key !== 46 &&
      (prevPosition === 3 ||
        prevPosition === 7 ||
        prevPosition === 8 ||
        prevPosition === 11 ||
        prevPosition === 14)
    ) {
      prevPosition += coef;
    }
    let sortedString = e.target.value.split(" ").join("");
    if (sortedString.length < 2 && key === 8) {
      return setPhone("");
    } else if (sortedString.length === 1) {
      sortedString = "+7" + sortedString;
    }
    if (!sortedString.startsWith("+7")) {
      return;
    }
    for (let i = 1; i < sortedString.length; i++) {
      const code = sortedString.charCodeAt(i);
      if (!(code >= 48 && code <= 57)) {
        sortedString = sortedString.slice(0, i) + sortedString.slice(i + 1);
      }
    }
    phoneNumberRef.current!.style.caretColor = "transparent";

    const str = [];
    const strs = [
      sortedString.slice(0, 2),
      sortedString.slice(2, 5),
      sortedString.slice(5, 8),
      sortedString.slice(8, 10),
      sortedString.slice(10, 12),
    ];
    for (let s of strs) {
      if (s) {
        str.push(s);
      }
    }
    setPhone(str.join(" "));
    setTimeout(() => {
      phoneNumberRef.current!.selectionStart = prevPosition;
      phoneNumberRef.current!.selectionEnd = prevPosition;
      phoneNumberRef.current!.style.caretColor = "black";
    });
  };

  const validate = useCallback((phone: string, sum: string) => {
    let valid = true;
    if (!phone.length || phone.length < 16) {
      valid = false;
      setPhoneIsValid(false);
    } else {
      setPhoneIsValid(true);
    }
    if (!(+sum >= 1 && +sum <= 1000) || !sum.length) {
      valid = false;
      setSumIsValid(false);
    } else {
      setSumIsValid(true);
    }
    setFormIsValid(valid);
  }, []);

  useEffect(() => {
    validate(curPhone, curSum);
  }, [curPhone, curSum, validate]);

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
              <InputContainer>
                <label htmlFor="phone">Телефон</label>
                <input
                  ref={phoneNumberRef}
                  value={curPhone}
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Введите номер"
                  onBlur={onPhoneBlured}
                  onFocus={onPhoneFocused}
                  onKeyDown={onChangedPhoneValue}
                  onChange={onChange}
                />
                {!phoneIsValid && phoneIsTouched && (
                  <InputErrorMessage>
                    *Телефон введен не полностью
                  </InputErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <label htmlFor="sum">Сумма</label>
                <input
                  onBlur={() => setSumIsTouched(true)}
                  onFocus={() => setSumIsTouched(false)}
                  onChange={onSumChangedHandler}
                  type="number"
                  name="sum"
                  id="sum"
                  placeholder="Введите сумму"
                  value={curSum}
                />
                {!sumIsValid && sumIsTouched && (
                  <InputErrorMessage>
                    *Размер суммы должен быть в пределах от 1 до 1000
                  </InputErrorMessage>
                )}
              </InputContainer>
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

export default PaymentForm;
