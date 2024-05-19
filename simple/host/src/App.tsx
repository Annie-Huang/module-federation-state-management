import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Header from 'nav/Header';

import './index.scss';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      <Header />
      <div>Name: host</div>
      <div>Count: {count}</div>
      <div>Name: host</div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className='bg-indigo-800 text-white font-bold py-2 px-4 rounded'
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
