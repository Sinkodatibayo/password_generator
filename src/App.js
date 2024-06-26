import GeneratedPassword from "./components/GeneratedPassword";
export default function App() {
  return (
    <div className="bg-slate-900 w-screen h-screen flex flex-col text-white text-slate-100 ">
      <h1 className="text-slate-500 text-4xl capitalize text-center py-10">
        password generator
      </h1>

      <GeneratedPassword/>
    </div>
  );
}
