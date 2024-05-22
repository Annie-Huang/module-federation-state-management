// import React, { FC } from 'react';
import React from 'react';

import './base.scss';
// import type { HeaderProps } from 'mfe-shared';

// interface HeaderProps {
//   count: number;
//   onClear: () => void;
// }

import useStore from 'host/store';

// const Header: FC<HeaderProps> = ({ count, onClear }) => {
// const Header: HeaderProps = ({ count, onClear }) => {
const Header = () => {
  const { count, clear } = useStore();

  return (
    <header className='bg-blue-700 text-white font-bold text-3xl p-5 flex'>
      <div className='flex-grow'>Awesome Header</div>
      <div>
        {count}

        <button
          onClick={clear}
          className='bg-indigo-800 text-white font-bold py-2 px-4 rounded'
        >
          Clear Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
