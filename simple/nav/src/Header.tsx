import React, { FC } from 'react';

import './base.scss';

interface HeaderProps {
  count: number;
  onClear: () => void;
}

const Header: FC<HeaderProps> = ({ count, onClear }) => {
  return (
    <header className='bg-blue-700 text-white font-bold text-3xl p-5 flex'>
      <div className='flex-grow'>Awesome Header</div>
      <div>
        {count}

        <button
          onClick={onClear}
          className='bg-indigo-800 text-white font-bold py-2 px-4 rounded'
        >
          Clear Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
