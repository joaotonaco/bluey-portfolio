import React from 'react';

function Title({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h1
      id={id && id}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white transition-colors duration-150"
    >
      {children}
    </h1>
  );
}

export default Title;
