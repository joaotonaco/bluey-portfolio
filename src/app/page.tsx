'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Timeline from '../components/Timeline';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed p-1 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        <div className="text-white block dark:hidden">
          <BsMoon size={20} />
        </div>
        <div className="text-stone-900 hidden dark:block">
          <BsSun size={20} />
        </div>
      </button>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
