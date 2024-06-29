import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Generated from "./Generated";

export default function GenerationOptions() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({
    label: "Very Weak",
    color: "darkred",
  });

  function evaluatePasswordStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  }

  function getStrengthLabel(score) {
    switch (score) {
      case 5:
        return { label: "Very Strong", color: "green" };
      case 4:
        return { label: "Strong", color: "blue" };
      case 3:
        return { label: "Medium", color: "yellow" };
      case 2:
      case 1:
        return { label: "Weak", color: "red" };
      default:
        return { label: "Very Weak", color: "darkred" };
    }
  }

  function PassGenerator(passLen, isUpp, isLow, isNum, isSym) {
    const lowCase = "abcdefghijklmnopqrstuvxyz";
    const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    const Numbers = "0123456789";
    const SpecialChar = "£$&()*+[]@#^-_!?";

    let tempPassword = "";
    for (let i = 0; i < passLen; i++) {
      if (isUpp) {
        const j = Math.floor(Math.random() * upCase.length);
        tempPassword += upCase[j];
      }
      if (tempPassword.length >= passLen) break;

      if (isLow) {
        const j = Math.floor(Math.random() * lowCase.length);
        tempPassword += lowCase[j];
      }
      if (tempPassword.length >= passLen) break;

      if (isNum) {
        const j = Math.floor(Math.random() * Numbers.length);
        tempPassword += Numbers[j];
      }
      if (tempPassword.length >= passLen) break;

      if (isSym) {
        const j = Math.floor(Math.random() * SpecialChar.length);
        tempPassword += SpecialChar[j];
      }
      if (tempPassword.length >= passLen) break;
    }
    setPassword(tempPassword);
    const score = evaluatePasswordStrength(tempPassword);
    setStrength(getStrengthLabel(score));
  }

  const [place, setPlace] = useState({
    length: "8",
    uppercaseLetter: false,
    lowercaseLetter: false,
    numbers: false,
    Symbols: false,
  });

  return (
    <>
      <Generated password={password} />
      <div className="bg-slate-700 xl:w-1/3 lg:h-3/5 flex flex-col my-4 md:w-2/3 md:h-3/5 py-4 text-slate-300">
        <div className="flex items-center justify-between w-full h-24 p-6 px-8 text-xl py-4">
          <span className="text-2xl font-semibold">Character Length</span>
          <span className="text-4xl font-semibold">{place.length}</span>
        </div>
        <div className="h-24 w-full px-8 flex items-center justify-center">
          <input
            type="range"
            min="8"
            max="22"
            value={place.length}
            onChange={(e) => setPlace({ ...place, length: e.target.value })}
          />
        </div>
        <div className="h-24 w-full px-8 flex flex-col items-center capitalize justify-center my-16">
          <div className="w-full my-4 flex">
            <input
              type="checkbox"
              onChange={(e) =>
                setPlace({ ...place, uppercaseLetter: e.target.checked })
              }
              className="mr-4 w-6 h-6 accent-white"
            />
            <p className="text-xl font-semibold">Include uppercase letters</p>
          </div>
          <div className="w-full my-4 flex">
            <input
              type="checkbox"
              onChange={(e) =>
                setPlace({ ...place, lowercaseLetter: e.target.checked })
              }
              className="mr-4 w-6 h-6 accent-white"
            />
            <p className="text-xl font-semibold">Include lowercase letters</p>
          </div>
          <div className="w-full my-4 flex">
            <input
              type="checkbox"
              onChange={(e) =>
                setPlace({ ...place, numbers: e.target.checked })
              }
              className="mr-4 w-6 h-6 accent-white"
            />
            <p className="text-xl font-semibold">Include numbers</p>
          </div>
          <div className="w-full my-4 flex">
            <input
              type="checkbox"
              onChange={(e) =>
                setPlace({ ...place, Symbols: e.target.checked })
              }
              className="mr-4 w-6 h-6 accent-white"
            />
            <p className="text-xl font-semibold">Include symbols</p>
          </div>
        </div>
        <div className="h-20 flex items-center px-4 mx-8 my-4 justify-between bg-slate-800">
          <p className="font-bold text-2xl tracking-wider uppercase">
            Strength
          </p>
          <div className="flex gap-2 items-center">
            <span
              className="font-medium text-2xl mr-2"
              style={{ color: strength.color }}
            >
              {strength.label}
            </span>
            <div className="h-full flex items-center justify-center">
              <div
                className={`border-none border-white w-4 h-10 mr-2 ml-2 ${
                  strength.color === "green" ? "bg-green-500 border-none" : ""
                }`}
              ></div>
              <div
                className={`border-none border-white w-4 h-10 mr-2 ${
                  strength.color === "blue"
                    ? "bg-blue-500 border-none"
                    : strength.color === "green"
                    ? "bg-green-500 border-none"
                    : ""
                }`}
              ></div>
              <div
                className={`border-none border-white w-4 h-10 mr-2 ${
                  strength.color === "yellow"
                    ? "bg-yellow-400 border-none"
                    : strength.color === "blue"
                    ? "bg-blue-500 border-none"
                    : strength.color === "green"
                    ? "bg-green-500 border-none"
                    : ""
                }`}
              ></div>
              <div
                className={`border-none border-white w-4 h-10  ${
                  strength.color === "red"
                    ? "bg-red-500 border-none"
                    : strength.color === "yellow"
                    ? "bg-yellow-400 border-none"
                    : strength.color === "blue"
                    ? "bg-blue-500 border-none"
                    : strength.color === "green"
                    ? "bg-green-500 border-none"
                    : ""
                }`}
              ></div>
              <div
                className={`border-none w-4 h-10  ml-2 ${
                  strength.color === "red"
                    ? "bg-red-500 border-none"
                    : strength.color === "yellow"
                    ? "bg-yellow-400 border-none"
                    : strength.color === "blue"
                    ? "bg-blue-500 border-none"
                    : strength.color === "green"
                    ? "bg-green-500 border-none"
                    : strength.color === "darkred"
                    ? "bg-red-900 border-none"
                    : "border-none w-4 h-10 bg-red-900 "
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="text-center flex items-center justify-center bg-white text-black h-20 mx-8 cursor-pointer"
          onClick={() =>
            PassGenerator(
              place.length,
              place.uppercaseLetter,
              place.lowercaseLetter,
              place.numbers,
              place.Symbols
            )
          }
        >
          <p className="pr-4 text-2xl font-bold uppercase">Generate</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </>
  );
}
