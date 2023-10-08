import { useState } from 'react';

const useCounter = (initialValue:number = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value:number = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value:number = 1) => {
    setCounter(counter - value);
  };

  return { counter, increment, decrement };
};

export default useCounter;
