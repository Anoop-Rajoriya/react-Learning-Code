import React from "react";
import { createPortal } from 'react-dom';
export default function Popup({state}) {

const [showPopup, setShowPopup] = state;


function closePopup(event){
    event?.preventDefault();

    setShowPopup(false)
}

function stopBubbling(event) {
    console.log('stop')

    event.stopPropagation()
}

  return (
    createPortal(
        <div
    onClick={closePopup}
      className={`fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-in-out `}
    >
      <div onClick={stopBubbling} className="container mx-auto max-w-[500px] px-4 py-8 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form
          onSubmit={closePopup}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email2"
              name="email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password2"
              name="password"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <button
        onClick={closePopup}
          type="button"
          className="text-gray-600 hover:text-gray-800 focus:outline-none mt-4"
        >
          Close
        </button>
      </div>
    </div>
    , document.getElementById('popup')
    )
  );
}
