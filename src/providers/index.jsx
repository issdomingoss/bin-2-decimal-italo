import {ConversorProvider} from './conversor';
import React from 'react';
// eslint-disable-next-line react/prop-types
export const Providers = ({children}) => {
  return <ConversorProvider>
    {children}
  </ConversorProvider>;
};
