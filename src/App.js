import React, { useState, useMemo } from 'react';

const MyApp = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  const isEven = useMemo(() => {
    console.log('Hi!');
  });


  return (
  <div className='style'>
  <p className='count'>Add... {counter}</p>
  <button className='button_one' onClick={increase}>Increment</button>
  <button className='button_two' onClick={decrement}>Decrease</button>
</div>
  );
};

export default MyApp;
