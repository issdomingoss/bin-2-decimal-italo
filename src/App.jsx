import './App.css';
import React, {useContext} from 'react';
import {Conversor} from './components/conversor/conversor.jsx';
import {GlobalStyle} from './styles/global';
import {ConversorContext} from './providers/conversor';
import {ComponentError} from './components/componentError/componentError.jsx';
const App = () => {
  const {error} = useContext(ConversorContext);

  console.log(error);

  return (
    <>
      <GlobalStyle />
      {error?(
        <ComponentError />
      ): (
        <Conversor />
      )}
    </>
  );
};

export default App;
