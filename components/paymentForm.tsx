import InputErrorMessage from "./inputErrorMessage";
import Image from "next/image";
import styled from "styled-components";
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
import Button from "./UI/button";

interface PaymentFormProps {
  submited: FormEventHandler;
  setSum: (sum: string) => void;
  setPhone: (phone: string) => void;
  curPhone: string;
  curSum: string;
  imgUrl: string;
  title: string;
}

const InputContainer = styled.div`
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
    color: rgb(30, 30, 30);
  }

  input {
    padding: 6px;
    border-radius: 0;
    border: 2px solid #808080;
    outline: none;
  }

  input:focus {
    border: 2px solid #ffef00;
  }

  input:last-of-type {
    width: 150px;
  }

  @media screen and (max-width: 340px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Operator = styled.div`
  text-align: center;
  width: 300px;

  a {
    text-decoration: none;
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-bottom: 5px;

  img {
    height: 100%;
  }
`;

const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 40px;

  @media screen and (max-width: 680px) {
    justify-content: center;
    gap: 40px;
  }
`;

const PaymentFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 120px;

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    padding-bottom: 0;
    flex-wrap: wrap;
    margin-top: auto;
  }

  a {
    text-decoration: none;
    font-size: 0.9em;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;

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
  const [numbers, setNumbers] = useState<string[]>([
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
  ]);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [sumIsValid, setSumIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [prevPosition, setPrevPosition] = useState<null | number>(null);
  const phoneNumberRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    const prevPhone = window.localStorage.getItem("number");
    const prevSum = window.localStorage.getItem("sum");
    if (prevPhone) {
      window.localStorage.setItem("number", "");
      const newNumbers = JSON.parse(prevPhone);
      setNumbers(newNumbers);
      setPhone(
        `+7 (${newNumbers.slice(0, 3).join("")}) ${newNumbers
          .slice(3, 6)
          .join("")}-${newNumbers.slice(6, 8).join("")}-${newNumbers
          .slice(8)
          .join("")}`
      );
    }
    if (prevSum) {
      window.localStorage.setItem("sum", "");
      setSum(prevSum!);
    }
    if (curPhone) {
      if (phoneNumberRef.current) {
        setTimeout(() => {
          phoneNumberRef.current!.style.caretColor = "black";
          const id = phoneNumberRef.current!.value.indexOf("_");
          phoneNumberRef.current!.selectionStart = prevPosition ?? id;
          phoneNumberRef.current!.selectionEnd = prevPosition ?? id;
        });
      }
      setPrevPosition(null);
      setPhone(
        `+7 (${numbers.slice(0, 3).join("")}) ${numbers
          .slice(3, 6)
          .join("")}-${numbers.slice(6, 8).join("")}-${numbers
          .slice(8)
          .join("")}`
      );
    }
  }, [numbers]);

  const onChangedPhoneValue: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const clearPosition = (position: number, isMult: boolean) => {
      let pos = position - 4;
      let prevPos = position;
      if (pos < 0) {
        pos = 0;
        prevPos = 4;
      } else if (pos >= 3 && pos < 5 && e.keyCode !== 8) {
        pos = 3;
        prevPos = 9;
      } else if (pos > 3 && pos <= 5 && e.keyCode === 8) {
        prevPos = 7;
        pos = 3;
      } else if (pos > 3) {
        pos -= 2;
      }
      if (pos === 6 && e.keyCode !== 8) {
        prevPos++;
      } else if (pos === 7 && e.keyCode === 8 && !isMult) {
        prevPos--;
        pos--;
      } else if (pos > 6) {
        pos--;
      }
      if (pos === 8 && e.keyCode !== 8) {
        prevPos++;
      } else if (pos === 9 && e.keyCode === 8 && !isMult) {
        prevPos--;
        pos--;
      } else if (pos > 8) {
        pos--;
      }
      return [pos, prevPos];
    };

    phoneNumberRef.current!.style.caretColor = "transparent";

    let string = phoneNumberRef.current!.value.slice(4);
    let sortedString = "";
    for (let ch of string) {
      if (ch === ")" || ch === "-" || ch === " ") {
        continue;
      }
      sortedString += ch;
    }

    const isMultipleSelect =
      phoneNumberRef.current!.selectionStart !==
      phoneNumberRef.current!.selectionEnd;

    const [startPosition, startPrevPosition] = clearPosition(
      phoneNumberRef.current!.selectionStart!,
      isMultipleSelect
    );
    const [endPosition, endPrevPosition] = clearPosition(
      phoneNumberRef.current!.selectionEnd!,
      isMultipleSelect
    );
    if (isMultipleSelect) {
      let prevPosition = startPrevPosition;
      setNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers];
        for (let i = startPosition; i < endPosition; i++) {
          newNumbers[i] = "_";
        }
        if (
          (+e.keyCode >= 48 && +e.keyCode <= 57) ||
          (+e.keyCode >= 96 && +e.keyCode <= 105)
        ) {
          newNumbers[startPosition] = e.key;
          prevPosition += 1;
        }
        return newNumbers;
      });
      return setPrevPosition(prevPosition);
    }

    if (e.keyCode === 8) {
      if (startPosition === 0) {
        console.log("....");
        setPrevPosition(4);
        return setNumbers((prevNumbers) => [...prevNumbers]);
      }
      setPrevPosition(startPrevPosition - 1);
      setNumbers((prevNumbers) => {
        return prevNumbers
          .slice(0, startPosition - 1)
          .concat("_")
          .concat(prevNumbers.slice(startPosition));
      });
    } else if (e.keyCode === 46) {
      setPrevPosition(startPrevPosition);
      if (
        sortedString[startPosition] === "_" &&
        sortedString[startPosition + 1] === "_"
      ) {
        return setNumbers((prevNumbers) => [...prevNumbers]);
      }
      setNumbers((prevNumbers) => {
        return prevNumbers
          .slice(0, startPosition)
          .concat(prevNumbers.slice(startPosition + 1))
          .concat("_");
      });
    } else if (
      (+e.keyCode >= 48 && +e.keyCode <= 57) ||
      (+e.keyCode >= 96 && +e.keyCode <= 105)
    ) {
      if (startPosition === 10) {
        return;
      }
      setPrevPosition(startPrevPosition + 1);
      setNumbers((prevNumbers) => {
        if (sortedString[startPosition] === "_") {
          return prevNumbers
            .slice(0, startPosition)
            .concat(e.key)
            .concat(prevNumbers.slice(startPosition + 1));
        }
        const numbers = prevNumbers
          .slice(0, startPosition)
          .concat(e.key)
          .concat(prevNumbers.slice(startPosition, -1));
        return numbers;
      });
    } else {
      if (startPosition === 10) {
        phoneNumberRef.current!.style.caretColor = "black";
        return;
      }
      setPrevPosition(phoneNumberRef.current!.selectionStart);
      setNumbers((prevNumbers) => [...prevNumbers]);
    }
  };

  const validate = useCallback((phone: string, sum: string) => {
    let valid = true;
    if (phone.indexOf("_") !== -1 || !phone.length) {
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

  const onPhoneFocused: FocusEventHandler = (e) => {
    if (!curPhone) {
      setPhone("+7 (___) ___-__-__");
    }
    setPhoneIsTouched(false);
    const id =
      curPhone.indexOf("_") !== -1
        ? curPhone.indexOf("_")
        : curPhone.length
        ? curPhone.length
        : 4;
    setTimeout(() => {
      phoneNumberRef.current!.selectionStart = id;
      phoneNumberRef.current!.selectionEnd = id;
    });
  };

  const onPhoneBlured: FocusEventHandler = (e) => {
    if (
      numbers.reduce((prev, cur) => {
        if (cur === "_") {
          return prev + 1;
        }
        return prev;
      }, 0) === 10
    ) {
      setPhone("");
    }
    setPhoneIsTouched(true);
  };

  const onOperatorChanged = () => {
    if (
      numbers.reduce((prev, cur) => {
        if (cur === "_") return prev;
        return prev + 1;
      }, 0) !== 0
    ) {
      window.localStorage.setItem("number", JSON.stringify(numbers));
    }
    window.localStorage.setItem("sum", curSum);
  };

  return (
    <div>
      <form onSubmit={submited}>
        <FormContent>
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
                onChange={() => {}}
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
              <a onClick={onOperatorChanged}>Другой оператор</a>
            </Link>
          </Operator>
        </FormContent>
        <PaymentFooter>
          <Line />
          <div className="buttons-container">
            <Link href="/">На главную</Link>
            <Button type="submit" disabled={!formIsValid}>
              Оплатить
            </Button>
          </div>
        </PaymentFooter>
      </form>
    </div>
  );
};

export default PaymentForm;
