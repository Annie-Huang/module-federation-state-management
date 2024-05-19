import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';

import './index.scss';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <Header count={count} onClear={() => setCount(0)} />
      <div>Name: nav</div>
    </div>
  );
};
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
