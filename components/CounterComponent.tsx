import useCounter from '@/hooks/useCounter';
import { Counter } from '@/interface/CounterInterface';
import React, { useState } from 'react'

const CounterComponent = (props: Counter) => {
  const { counter: counter1, increment: increment1, decrement: decrement1 } = useCounter();
  const [counterVal,setCounterVal] = useState<number>(1);

  return (
    <div className="w-1/2">
      <h2 className="text-2xl font-semibold">{props.title}</h2>
      <div className="flex space-x-2">
        <button
          onClick={() => decrement1(counterVal)}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Decrement
        </button>
        <p className="text-xl">{counter1}</p>
        <button
          onClick={() => increment1(counterVal)}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Increment
        </button>

        {props.showTextBox ?
        <input
          type="number"
          defaultValue={counterVal}
          // value={counterVal}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setCounterVal(value)
          }}
          placeholder="Decrement Value"
          className="px-4 py-2 rounded-md input"
        /> : ''
      }
      </div>
    </div>
  )
}

export default CounterComponent;