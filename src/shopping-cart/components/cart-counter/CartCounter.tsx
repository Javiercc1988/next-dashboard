"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {
  const [count, setCount] = useState(value);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="w-24 bg-slate-950 text-white p-4 rounded-lg text-xl font-bold hover:bg-purple-900 transition-all duration-150 "
        >
          -1
        </button>
        <button
          onClick={increment}
          className="w-24 bg-slate-950 text-white p-4 rounded-lg text-xl font-bold hover:bg-purple-900 transition-all duration-150"
        >
          +1
        </button>
      </div>
    </>
  );
};
