import Link from 'next/link';
import React from 'react';
import type { PortfolioItemData } from '../data/portfolio';

function PortfolioItem({ title, imgUrl, stack, link }: PortfolioItemData) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-stone-300 rounded-md overflow-hidden transition-[transform,box-shadow] duration-300 hover:scale-[1.01] hover:shadow-stone-500/70 hover:shadow-[0_0_20px_0] hover:bg-stone-200 dark:hover:bg-stone-800"
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold decoration-2 dark:text-white">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-300 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
}

export default PortfolioItem;
