import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PassGenerator from "./PassGenerator";
import Generated from "./Generated";

export default function GenerationOptions() {
  // Passowrd lenght state
  // const [password, setPassword] = useState("");
  // -----------------
  let password = "";

  function PassGenerator(passLen, isUpp, isLow, isNum, isSym) {
    const lowCase = "abcdefghijklmnopqrstuvxyz";
    const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    const Numbers = "0123456789";
    const SpecialChar = "£$&()*+[]@#^-_!?";

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

    // if (password.length === passLen || password.length > passLen) return;
  }
  //-------------------------

  const [place, setPlace] = useState({
    length: "8",
    uppercaseLetter: false,
    lowercaseLetter: false,
    numbers: false,
    Symbols: false,
  });

  return (
    <div className="bg-slate-700 xl:w-1/3  lg:h-3/5  flex flex-col my-4 md:w-2/3 md:h-3/5 py-4 text-slate-300 ">
      <div className="flex items-center justify-between  w-full h-24 p-6  items-self-center px-8 text-xl py-4">
        <span className="text-2xl font-semibold">Character Lenght</span>
        <span className="text-4xl font-semibold">{place.length}</span>
      </div>
      {/* RANGE INPUT */}
      <div className="h-24 w-full px-8 flex items-center justify-center">
        <input
          type="range"
          min="8"
          max="22"
          value={place.length}
          onChange={(e) => {
            setPlace({ ...place, length: e.target.value });
          }}
        />
      </div>
      {/* OTHER OPTIONS */}
      {/* UpperCase */}
      <div className="h-24 w-full px-8 flex flex-col items-center capitalize  justify-center my-16">
        <div className="w-full my-4 flex">
          <input
            type="checkbox"
            onChange={(e) => {
              setPlace({ ...place, uppercaseLetter: e.target.checked });
            }}
            className="mr-4  w-6 h-6 accent-white  "
          />
          <p className="text-xl font-semibold">include uppercase letters</p>
        </div>
        {/* LowerCase */}
        <div className="w-full my-4 flex">
          <input
            type="checkbox"
            onChange={(e) => {
              setPlace({ ...place, lowercaseLetter: e.target.checked });
            }}
            className="mr-4  w-6 h-6 accent-white  "
          />
          <p className="text-xl font-semibold">include lowercase letters</p>
        </div>
        {/* Numbers */}
        <div className="w-full my-4 flex">
          <input
            type="checkbox"
            onChange={(e) => {
              setPlace({ ...place, numbers: e.target.checked });
            }}
            className="mr-4  w-6 h-6 accent-white  "
          />
          <p className="text-xl  font-semibold">include numbers</p>
        </div>
        {/* Symbols */}
        <div className="w-full my-4 flex">
          <input
            type="checkbox"
            onChange={(e) => {
              setPlace({ ...place, Symbols: e.target.checked });
            }}
            className="mr-4  w-6 h-6 accent-white  "
          />
          <p className="text-xl font-semibold">include symbols</p>
        </div>
      </div>
      <div className=" h-20 flex items-center px-4   mx-8 my-4 justify-between bg-slate-900 ">
        <p className="font-bold text-2xl tracking-wider		uppercase">Strenght</p>
        <div className="flex gap-2 items-center">
          <span className="font-medium text-2xl text-orange-500 ">Medium</span>
          <div className=" h-full  flex  items-center justify-center ">
            <div className=" border-4 border-white w-4 h-10 mr-2 bg-white"></div>
            <div className=" border-4 border-white w-4 h-10 mr-2 bg-white"></div>
            <div className=" border-4 border-white w-4 h-10 mr-2"></div>
            <div className=" border-4 border-white w-4 h-10 "></div>
          </div>
        </div>
      </div>
      <div
        className="text-center flex items-center justify-center bg-white
      text-black h-20 mx-8 cursor-pointer"
        onClick={() => {
          PassGenerator(
            place.length,
            place.uppercaseLetter,
            place.lowercaseLetter,
            place.numbers,
            place.Symbols
          );
          console.log(password);
          console.log(password.length);
          password = "";
        }}
      >
        <p className="pr-4 text-2xl font-bold uppercase">Generate</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}
