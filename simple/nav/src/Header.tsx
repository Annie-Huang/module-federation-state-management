// import React, { FC } from 'react';
import React from 'react';

import './base.scss';

// interface HeaderProps {
//   count: number;
//   onClear: () => void;
// }

// const Header: FC<HeaderProps> = ({ count, onClear }) => {
const Header = () => {
  return (
    <header className='bg-blue-700 text-white font-bold text-3xl p-5 flex'>
      <div>Awesome Header</div>
    </header>
  );
};

export default Header;
