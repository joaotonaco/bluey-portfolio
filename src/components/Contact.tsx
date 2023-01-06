import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div className="flex flex-col mb-10 md:mx-auto">
      <div className="flex justify-center items-center">
        <form
          method="POST"
          action="https://getform.io/f/d554d6e2-97d8-400d-9de7-ddacfd58e679"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your E-mail"
            className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blurple to-plurple drop-shadow-md hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
