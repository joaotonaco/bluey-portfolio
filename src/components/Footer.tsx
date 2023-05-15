import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              key="twitter"
              href="https://twitter.com/jaootonaco"
              className="text-white dark:text-zinc-400 inline-flex items-center space-x-2 rounded-full"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              key="discord"
              href="https://discord.com/users/702529018410303640"
              className="text-white dark:text-zinc-400 inline-flex items-center space-x-2 rounded-full"
            >
              <FaDiscord size={20} />
            </Link>
            <Link
              key="github"
              href="https://github.com/bluee-js"
              className="text-white dark:text-zinc-400 inline-flex items-center space-x-2 rounded-full"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
