import { Dispatch, SetStateAction } from "react";

type useValidate = () => (
  phone: string,
  setPhoneIsValid: Dispatch<SetStateAction<boolean>>,
  setSumIsValid: Dispatch<SetStateAction<boolean>>,
  sum: string,
  setFormIsValid: Dispatch<SetStateAction<boolean>>
) => void;

export const useValidate: useValidate =
  () => (phone, setPhoneIsValid, setSumIsValid, sum, setFormIsValid) => {
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
  };
