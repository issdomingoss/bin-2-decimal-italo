/* eslint-disable max-len */

import React, {useState} from 'react';
import {useContext} from 'react';
import {ConversorContext} from '../../providers/conversor';
import {Container, ContainerInputButton,
  ContainerResult, ButtonClear, ButtonConvert} from './style';

export const Conversor = () => {
  const {
    handleConversor,
    result,
    setInputClient,
    inputClient,
    setResult,
  } = useContext(ConversorContext);

  const [displayBinary, setDisplayBinary] = useState('a binary number...');
  const handleBinaryDisplay = (value) => {
    setDisplayBinary(value);
  };

  const handleClear = () => {
    setResult(0);
    setDisplayBinary('a binary number...');
  };

  return (
    <Container>
      <h1>Conversor of binary number to decimal</h1>

      <ContainerInputButton>
        <input type="text" value={ inputClient } onChange={(e) => {
          setInputClient(e.target.value),
          handleBinaryDisplay(e.target.value);
        }}/>
        <ButtonConvert onClick={handleConversor}>Convert</ButtonConvert>
      </ContainerInputButton>
      <ContainerResult>
        <h2>{displayBinary}</h2>
        <span>Result: </span>
        <p>{result}</p>
      </ContainerResult>
      <ButtonClear onClick={handleClear}>Clear</ButtonClear>
    </Container>
  );
};
