// import React, { useState } from 'react';
import React from 'react';

import ReactDOM from 'react-dom/client';

// The setting in C:\react\module-federation-state-management\use-context\host\src\@types\nav\Header\index.d.ts
// and C:\react\module-federation-state-management\use-context\host\tsconfig.json give it the type for count props and onClear props
import Header from 'nav/Header';

import './index.scss';

// Have to use 'host/store' instead of './store', so it can be shared with the <Header> in <App> in the nav side
// This make sure it use the same instance with the nav app.
import { StoreProvider, useStore } from 'store/store';

const App = () => {
  // const [count, setCount] = useState<number>(0);
  const { count, increment } = useStore();

  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      {/*<Header count={count} onClear={() => setCount(0)} />*/}
      <Header />
      <div>Name: host</div>
      <div>Count: {count}</div>
      <div>Name: host</div>
      <div>
        <button
          onClick={increment}
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

// root.render(<App />);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
