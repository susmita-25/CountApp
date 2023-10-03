// useDarkMode.js
import useDarkMode from 'use-dark-mode';

const useDarkModeToggle = () => {
  const isClient = typeof window !== 'undefined';

  // Provide a default value of false when used on the server side
  const darkMode = useDarkMode(isClient ? false : true);

  return darkMode;
};

export default useDarkModeToggle;
