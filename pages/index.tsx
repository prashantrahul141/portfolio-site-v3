import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [state, setState] = useState(0);
  return (
    <>
      {state}
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}>
        update
      </button>
    </>
  );
};

export default Home;
