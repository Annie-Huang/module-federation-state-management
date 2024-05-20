import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
type CountContextType = [number, React.Dispatch<React.SetStateAction<number>>];

const CountContext = createContext<CountContextType>([0, () => {}]);

// https://stackoverflow.com/questions/55370851/how-to-fix-binding-element-children-implicitly-has-an-any-type-ts7031
export interface CountProviderProps {
  children: ReactNode;
}

export const CountProvider: FC<CountProviderProps> = ({ children }) => {
  return (
    <CountContext.Provider value={useState(0)}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  return useContext(CountContext);
};
