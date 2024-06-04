import React from 'react';

const Calculator = (props) => {
  const { x, y, operation } = props;

  const add = () => x + y;
  const subtract = () => x - y;
  const multiply = () => x * y;
  const divide = () => x / y;
  const power = () => Math.pow(x, y);

  let result;
  switch (operation) {
    case 'add':
      result = add();
      break;
    case 'subtract':
      result = subtract();
      break;
    case 'multiply':
      result = multiply();
      break;
    case 'divide':
      result = divide();
      break;
    case 'power':
      result = power();
      break;
    default:
      result = 'Invalid operation';
  }

  return (
    <div>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;
