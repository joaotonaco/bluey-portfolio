import React from 'react';

function Intro() {
  return (
    <header className="flex flex-col items-center justify-center text-center pt-20 mb-6">
      <h1 className="text-5xl md:text-7xl mb-1 font-bold bg-gradient-to-r from-blurple to-plurple bg-clip-text text-transparent">
        Bluey
      </h1>
      <p className="text-lg md:text-2xl mb-5 font-semibold tracking-wide text-stone-600">
        Full-Stack Developer
      </p>
      <p className="text-sm md:text-base max-w-xl mb-2 font-normal">
        My <b className="font-semibold">main programming languages</b> are{' '}
        <b className="font-semibold text-yellow-500">JavaScript</b> and{' '}
        <b className="font-semibold text-sky-500">TypeScript</b>
        .
        <br />I am currently working on projects related to{' '}
        <b className="font-semibold text-blurple">Discord</b> and{' '}
        <b className="font-semibold text-cyan-500">Web Development</b>.
      </p>
      <p className="text-sm max-w-xl mb-6 font-normal">
        <b>Some project examples:</b> CLI and Wrapper packages, VS Code
        extensions, Frontend, Backend and Discord Bots.
      </p>
    </header>
  );
}

export default Intro;
