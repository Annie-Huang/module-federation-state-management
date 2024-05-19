import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
type CountContextType = [number, () => void];

const CountContext = createContext<CountContextType>([0, () => {}]);

// https://stackoverflow.com/questions/55370851/how-to-fix-binding-element-children-implicitly-has-an-any-type-ts7031
export interface CounterProviderProps {
  children: ReactNode;
}

export const CountProvider: FC<CounterProviderProps> = ({ children }) => {
  return (
    <CountContext.Provider value={useState(0) as CountContextType}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  return useContext(CountContext);
};
