import React from 'react';
import { useExample } from './hook';

export default ({ name }) => {
  const exampleMutate = useExample();
  // exampleMutate.mutateAsync().catch((err) => console.log(err));
  return (
    <h1>
      Hello {name}!
      <button
        onClick={() =>
          exampleMutate.mutateAsync().catch((err) => console.log(err))
        }
      >
        Clo
      </button>
    </h1>
  );
};
