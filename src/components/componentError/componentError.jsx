/* eslint-disable react/no-unescaped-entities */
import React, {useContext} from 'react';
import {ConversorContext} from '../../providers/conversor';

export const ComponentError = () => {
  // eslint-disable-next-line max-len
  const {setInputClient, setResult, setError} = useContext(ConversorContext);

  const handleSetValueDefault = () => {
    setInputClient('');
    setResult(0);
    setError(false);
  };

  return (
    <>
      <h1>Verifique se os valores do input são apenas 0 e 1!</h1>
      <button onClick={handleSetValueDefault}>Voltar</button>
    </>
  );
};
