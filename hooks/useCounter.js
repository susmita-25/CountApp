import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const [cookies, setCookie] = useCookies(['counter']);

  useEffect(() => {
    if (cookies.counter) {
      setCounter(parseInt(cookies.counter));
    }
  }, []);

  const increment = (value = 1) => {
    setCounter((prevCounter) => prevCounter + value);
    setCookie('counter', counter + value, { path: '/' });
  };

  const decrement = (value = 1) => {
    setCounter((prevCounter) => prevCounter - value);
    setCookie('counter', counter - value, { path: '/' });
  };

  return { counter, increment, decrement };
};

export default useCounter;