import Head from 'next/head';
import { useEffect, useState } from 'react';
import useCounter from '../hooks/useCounter';
import useDarkMode from '../hooks/useDarkMode'; // Import your custom hook

export default function Home() {
  const { counter, increment, decrement } = useCounter();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const { counter: counter1, increment: increment1, decrement: decrement1 } = useCounter();
  const { counter: counter2, increment: increment2, decrement: decrement2 } = useCounter();

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Counter App Task</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css" />
      </Head>
      <div className="mb-4">
        <button onClick={toggleDarkMode} className="button-style">
          {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
      </div>
      <div className="flex space-x-">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold">Counter 1</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => decrement1()}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Decrement
            </button>
            <p className="text-xl">{counter1}</p>
            <button
              onClick={() => increment1()}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Increment
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold">Counter 2</h2>
          <div className="flex space-x-2">
            <input
              type="number"
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) {
                  decrement2(value);
                }
              }}
              placeholder="Decrement Value"
              className="px-4 py-2 rounded-md input"
            />
            <p className="text-xl">{counter2}</p>
            <input
              type="number"
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) {
                  increment2(value);
                }
              }}
              placeholder="Increment Value"
              className="px-4 py-2 rounded-md input"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
