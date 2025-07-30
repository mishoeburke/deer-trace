// App.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./clubtrace-logo.png";
import video from "./deer-bg.mp4";

export default function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbyHehXtbvG34UveCyn9SJZdQpkh_z-QvBddXrv0gk8vJliDi431BpYsKCwXrnwzeQBaOw/exec",
      {
        method: "POST",
        body: new URLSearchParams({ email }),
      }
    )
      .then(() => alert(`Thanks, ${email}! You're on the waitlist.`))
      .catch((err) => alert("Something went wrong. Try again later."));
    setEmail("");
  };

  return (
    <main className="min-h-screen font-sans text-white bg-black">
      <div className="fixed top-0 left-0 w-full z-20 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <img src={logo} alt="ClubTrace Logo" className="h-10" />
          <nav className="space-x-4">
            <Link to="/" className="hover:text-green-300">
              Home
            </Link>
            <Link to="/features" className="hover:text-green-300">
              Features
            </Link>
          </nav>
        </div>
      </div>

      {/* Background Video */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            ClubTrace
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow">
            Map your land, stay connected, and streamline club coordination.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 rounded w-72 text-black"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white font-semibold"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Callout Section */}
      <section className="bg-white text-black py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Launching Fall 2025</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Be one of the first to bring ClubTrace to your property.
        </p>
      </section>
    </main>
  );
}