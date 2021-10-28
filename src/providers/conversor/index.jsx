/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {createContext, useState} from 'react';

export const ConversorContext = createContext();

export const ConversorProvider = ({children}) => {
  const [inputClient, setInputClient] = useState('');
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);

  const handleConversor = () => {
    if (inputClient === '') {
      return setError(true);
    }

    // regex check inputClient only 0 and 1
    const pattern = /\b[01]+\b/;
    if (pattern.test(inputClient) == false) {
      return setError(true);
    }

    setInputClient('');

    const arrBin = [];
    const arrExpo = [];

    let soma = 0;

    for (let i = 0; i < inputClient.length; i++) {
      arrBin.push(parseInt(inputClient[i]));
    }

    for (let j = inputClient.length-1; j >= 0; j--) {
      arrExpo.push(parseInt([j]));
    }

    for (let num = 0; num < inputClient.length; num++) {
      soma += Math.pow(2, arrExpo[num]) * arrBin[num];
    }

    setResult(soma);
  };

  const handleChangeError = () => {
    setInputClient(' ');
    setError(false);
  };


  return (
    <ConversorContext.Provider value={{
      inputClient,
      handleConversor,
      result,
      setInputClient,
      error,
      handleChangeError,
      setResult,
      setError,
    }}>
      {children}
    </ConversorContext.Provider>
  );
};
