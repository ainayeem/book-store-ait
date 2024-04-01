import React, { useState } from "react";

const increment = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-gray-600 rounded w-[500px] h-[500px] flex flex-col mx-auto my-28 items-center justify-center">
      <div className="text-white font-bold text-5xl my-4">{count}</div>
      <button
        className="py-2 px-5 bg-green-500 text-white font-semibold rounded-lg  hover:bg-green-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 "
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default increment;
