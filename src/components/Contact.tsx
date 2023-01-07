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
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-stone-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your E-mail"
            className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-stone-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none focus:border-stone-600 min-h-[6rem] max-h-56"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-[size:200%] bg-gradient-to-r from-blurple to-plurple transition-all duration-300 hover:scale-[1.03] hover:bg-[100%]"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
