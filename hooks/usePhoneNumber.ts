import React from "react";

type usePhoneNumber = (
  phNumRef: React.RefObject<HTMLInputElement>,
  key: number,
  setPhone: (p: string) => void,
  curValue: string
) => void;

export const usePhoneNumber: () => usePhoneNumber =
  () => (phNumRef, key, setPhone, curValue) => {
    let prevPosition = phNumRef.current!.selectionStart;
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
    let sortedString = curValue.split(" ").join("");
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
    phNumRef.current!.style.caretColor = "transparent";

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
      phNumRef.current!.selectionStart = prevPosition;
      phNumRef.current!.selectionEnd = prevPosition;
      phNumRef.current!.style.caretColor = "black";
    });
  };
