import React from "react";
import { Link } from "react-router-dom";
import logo from "./clubtrace-logo.png";
import videoBg from "./deer-bg.mp4";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="ClubTrace Logo" className="h-10" />
          <h1 className="text-xl font-bold">ClubTrace</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-green-700">Features</a>
          <Link to="/polls" className="hover:text-green-700">Polls</Link>
          <Link to="/features" className="hover:text-green-700">More</Link>
        </nav>
      </header>

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover z-[-1]"
        ></video>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black bg-opacity-40 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            A smarter way to organize your hunting land, stands, and members — all in one place.
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            ClubTrace helps you manage hunting reservations, real-time check-ins, local resources, and club communication seamlessly.
          </p>
          <a
            href="#signup"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-24 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">📍 Smart Stand Mapping</h3>
            <p>Reserve and tag stands, view GPS check-ins, and track who is where in real-time using mobile location services.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">💬 Real-Time Club Chat</h3>
            <p>Communicate with members, share hunting reports, and coordinate meetups with built-in messaging.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">📓 Club Management Tools</h3>
            <p>Upload club rules, log harvests, manage member access, and monitor dues — all from one dashboard.</p>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-24 px-6 bg-green-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Be Part of the First Season</h2>
        <p className="mb-8 text-lg">Get early access and help shape the future of club hunting technology.</p>
        <iframe
          title="Signup Form"
          src="https://script.google.com/macros/s/AKfycbyHehXtbvG34UveCyn9SJZdQpkh_z-QvBddXrv0gk8vJliDi431BpYsKCwXrnwzeQBaOw/exec"
          width="100%"
          height="300"
          className="mx-auto border-none max-w-xl"
        ></iframe>
      </section>
    </div>
  );
}