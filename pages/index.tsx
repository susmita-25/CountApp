import Head from 'next/head';
import useCounter from '../hooks/useCounter';
import useDarkModeToggle from '../hooks/useDarkMode';
import { useEffect } from 'react';

export default function Home() {
  const { counter, increment, decrement } = useCounter();
  const { darkMode, setDarkMode } = useDarkModeToggle();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
  };
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Counter App</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css" />
      </Head>
      <div className="mb-4">
        <button onClick={handleToggleDarkMode} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
      </div>
      <div className="flex space-x-">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold">Counter 1</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => decrement()}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Decrement
            </button>
            <p className="text-xl">{counter}</p>
            <button
              onClick={() => increment()}
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
                  decrement(value);
                }
              }}
              placeholder="Decrement Value"
              className="px-4 py-2 rounded-md"
            />
            <p className="text-xl">{counter}</p>
            <input
              type="number"
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) {
                  increment(value);
                }
              }}
              placeholder="Increment Value"
              className="px-4 py-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
