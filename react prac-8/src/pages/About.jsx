import React from 'react'
import devImg from "../assets/devloper.png";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio eu neque auctor, at maximus nisl placerat. Aenean euismod bibendum laoreet. Integer sodales leo vel sapien cursus, quis rutrum leo auctor. Donec eu libero sit amet quam egestas semper. Aenean euismod bibendum laoreet.
        </p>
        <img className="rounded-lg ml-12 shadow-md" src={devImg} alt="About Us Image" />
      </div>
    </section>
  )
}
