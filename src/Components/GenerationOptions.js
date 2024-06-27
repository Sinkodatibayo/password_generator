import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

export default function GenerationOptions() {
  // Passowrd lenght state

  // const [place, setPlace] = useState(1);

  return (
    <div className="bg-slate-700 xl:w-1/3  lg:h-3/5  flex flex-col my-4 md:w-2/3 md:h-3/5 py-4 text-slate-300 ">
      <div className="flex items-center justify-between  w-full h-24 p-6  items-self-center px-8 text-xl py-4">
        <span className="text-2xl font-semibold">Character Lenght</span>
        <span className="text-4xl font-semibold">0</span>
      </div>
      <div className="h-24 w-full px-8 flex items-center justify-center">
        {/* <input
          type="text"
          placeholder="min 12 character..."
          className="w-full h-10 outline-none border-none bg-slate-500  placeholder:text-slate-300 focus:outline-none pl-4"
        /> */}

        <input type="range" className=" bg-slate-400" />
      </div>

      <div className="h-24 w-full px-8 flex flex-col items-center capitalize  justify-center my-16">
        <div className="w-full my-4 flex">
          <input type="checkbox" className="mr-4  w-6 h-6 accent-white  " />
          <p className="text-xl font-semibold">include uppercase letters</p>
        </div>
        <div className="w-full my-4 flex">
          <input type="checkbox" className="mr-4  w-6 h-6 accent-white  " />
          <p className="text-xl font-semibold">include lowercase letters</p>
        </div>
        <div className="w-full my-4 flex">
          <input type="checkbox" className="mr-4  w-6 h-6 accent-white  " />
          <p className="text-xl  font-semibold">include numbers</p>
        </div>
        <div className="w-full my-4 flex">
          <input type="checkbox" className="mr-4  w-6 h-6 accent-white  " />
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
      >
        <p className="pr-4 text-2xl font-bold uppercase">Generate</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}
