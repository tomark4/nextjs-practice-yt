import React from "react";
import { useState } from "react";

const Box = ({ title, value }) => {
  return (
    <div
      className={`rotate-${value} w-96 h-96 shadow-lg justify-center items-center flex rounded bg-blue-100 text-neutral-900`}
    >
      {title}
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-gray-100 p-5">
      <h1 className="text-center text-2xl font-bold underline">Hello world</h1>

      <div className="flex justify-center align-center mt-5 gap-4">
        <Box title="Box 1" value={1} />
        <Box title="Box 2" value={2} />
        <Box title="Box 3" value={6} />
      </div>

      <h2 className="mt-6 text-6xl text-center text-red-900">{counter}</h2>
      <div className="container my-5 mx-auto justify-center flex items-center">
        <button
          className="border-none bg-green-500 p-3 text-white rounded-md"
          onClick={() => setCounter(counter + 1)}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default App;
