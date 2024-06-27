import "./App.css";
import Generated from "./Components/Generated";
import GenerationOptions from "./Components/GenerationOptions";
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div className=" bg-slate-800 w-full h-screen mt-0 flex flex-col items-center">
      <h1 className="text-slate-300 text-3xl font-medium text-center py-8">
        Password Generator
      </h1>
      <Generated />
      <GenerationOptions />
    </div>
  );
}

export default App;
