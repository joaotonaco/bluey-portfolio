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
        className="fixed z-10 p-2 text-lg rounded-md md:p-1 right-4 md:right-20 top-4 bg-violet-300 dark:bg-orange-300 no-highlight"
      >
        <div className="block text-white dark:hidden">
          <BsMoon size={20} />
        </div>
        <div className="hidden text-zinc-900 dark:block">
          <BsSun size={20} />
        </div>
      </button>
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300">
        <div className="w-11/12 max-w-5xl mx-auto">
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
