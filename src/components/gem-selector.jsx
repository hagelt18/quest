import React, { useState } from 'react';
import './gem-selector.css';
import { useEffect } from 'react';
import { delay } from '../common/delay';


const GemSelector = ({ start, value, onChange }) => {

  const values = [
    'red',
    'orange',
    'yellow',
    'lightblue',
    'blue',
    'purple',
    'pink',
    'white'
  ]
  const [currentValue, setCurrentValue] = useState(start);

  useEffect(() => {
    setNextColor();
  }, [currentValue, value])

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const setNextColor = async () => {
    await delay(getRndInteger(800, 1200));
    if (!value) {
      let nextIndex = 0;
      const currentValueIndex = values.findIndex(x => x === currentValue);
      if (values.length > currentValueIndex + 1) {
        nextIndex = currentValueIndex + 1;
      }
      setCurrentValue(values[nextIndex]);
    }
  }

  const onGemClicked = () => {
    if (!value) {
      onChange(currentValue);
    } else {
      onChange(null);
    }
  }

  return (
    <div id="cut-diamond" className={value || currentValue} onClick={onGemClicked} />
  )
}

export default GemSelector;