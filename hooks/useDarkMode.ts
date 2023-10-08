import { useState, useEffect } from 'react';

const useDarkMode = (initialState:boolean = false) => {
  const [darkMode, setDarkMode] = useState(initialState);

  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add('dark'); // Add the class for dark mode
      body.classList.remove('light'); // Remove the class for light mode
    } else {
      body.classList.remove('dark'); // Remove the class for dark mode
      body.classList.add('light'); // Add the class for light mode
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
