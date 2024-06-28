import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Generated from "./Generated";

export default function GenerationOptions() {
  const [password, setPassword] = useState("");

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

      <div className="bg-slate-700 xl:w-1/3  lg:h-3/5  flex flex-col my-4 md:w-2/3 md:h-3/5 py-4 text-slate-300 ">
        <div className="flex items-center justify-between  w-full h-24 p-6  items-self-center px-8 text-xl py-4">
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
              onChange={(e) => setPlace({ ...place, uppercaseLetter: e.target.checked })}
              className="mr-4  w-6 h-6 accent-white"
            />
            <p className="text-xl font-semibold">Include uppercase letters</p>
          </div>
          <div className="w-full my-4 flex">
            <input
              type="checkbox"
              onChange={(e) => setPlace({ ...place, lowercaseLetter: e.target.checked })}
              className="mr-4  w-6 h-6 accent-white"
            />
            <p className="text-xl font-semibold">Include lowercase letters</p>
          </div>
          <div className="w-full my-4 flex">
            <input
              type="checkbox"
              onChange={(e) => setPlace({ ...place, numbers: e.target.checked })}
              className="mr-4  w-6 h-6 accent-white"
            />
            <p className="text-xl font-semibold">Include numbers</p>
          </div>
          <div className="w-full my-4 flex">
            <input
              type="checkbox"
              onChange={(e) => setPlace({ ...place, Symbols: e.target.checked })}
              className="mr-4  w-6 h-6 accent-white"
            />
            <p className="text-xl font-semibold">Include symbols</p>
          </div>
        </div>
        <div className="h-20 flex items-center px-4 mx-8 my-4 justify-between bg-slate-900">
          <p className="font-bold text-2xl tracking-wider uppercase">Strength</p>
          <div className="flex gap-2 items-center">
            <span className="font-medium text-2xl text-orange-500">Medium</span>
            <div className="h-full flex items-center justify-center">
              <div className="border-4 border-white w-4 h-10 mr-2 bg-white"></div>
              <div className="border-4 border-white w-4 h-10 mr-2 bg-white"></div>
              <div className="border-4 border-white w-4 h-10 mr-2"></div>
              <div className="border-4 border-white w-4 h-10"></div>
            </div>
          </div>
        </div>
        <div
          className="text-center flex items-center justify-center bg-white text-black h-20 mx-8 cursor-pointer"
          onClick={() => PassGenerator(
            place.length,
            place.uppercaseLetter,
            place.lowercaseLetter,
            place.numbers,
            place.Symbols
          )}
        >
          <p className="pr-4 text-2xl font-bold uppercase">Generate</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </>
  );
}
