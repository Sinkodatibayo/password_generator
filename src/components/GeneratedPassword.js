import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function GeneratedPassword() {
  return (
    <div className="flex items-center justify-center bg-slate-800 w-4/5 h-24 self-center p-6">
      <input
        placeholder="P4$Word!"
        className="mr-4 outline-none  w-full h-full bg-transparent  text-2xl  font-semiBold  placeholder:text-3xl"
      />
      <FontAwesomeIcon icon={faCopy} size="2xl" className="stroke-slate-900" />
    </div>
  );
}
