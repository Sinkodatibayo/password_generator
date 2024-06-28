import { faChessBishop } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export default function PassGenerator(passLen, isUpp, isLow, isNum, isSym) {
  const lowCase = "abcdefghijklmnopqrstuvxyz";
  const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const Numbers = "0123456789";
  const SpecialChar = "£$&()*+[]@#^-_!?";

  let password = "";
  for (let i = 0; i < passLen; i++) {
    if (isUpp === true) {
      const j = Math.round(Math.random() * upCase.length);
      password += upCase.slice(j, j + 1);
    }
    if (password.length >= passLen) break;

    if (isLow === true) {
      const j = Math.round(Math.random() * lowCase.length);
      password += lowCase.slice(j, j + 1);
    }
    if (password.length >= passLen) break;

    if (isNum === true) {
      const j = Math.round(Math.random() * Numbers.length);
      password += Numbers.slice(j, j + 1);
    }
    if (password.length >= passLen) break;

    if (isSym === true) {
      const j = Math.round(Math.random() * SpecialChar.length);
      password += SpecialChar.slice(j, j + 1);
    }
    if (password.length >= passLen) break;
  }
  password = "";
}
