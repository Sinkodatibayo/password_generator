import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Generated({ password }) {
  return (
    <div className="flex items-center justify-center bg-slate-700 xl:w-1/3 h-24 self-center p-6 my-4 md:w-2/3 ">
      <input
        placeholder="P4$W0rd!"
        className="mr-4 outline-none w-full h-full bg-transparent text-4xl font-bold placeholder:text-4xl placeholder:pl-4 placeholder:text-slate-500 text-slate-300"
        type="text"
        readOnly
        value={password}
      />
      <FontAwesomeIcon
        icon={faCopy}
        size="2xl"
        className="text-slate-300 cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(password);
        }}
      />
    </div>
  );
}
