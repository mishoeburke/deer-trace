import { useState } from "react";
import logo from "./clubtrace-logo.png";
import videoBg from "./deer-bg.mp4";

export default function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${email}! You're on the waitlist.`);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 shadow-md flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ClubTrace logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold tracking-tight">ClubTrace</h1>
        </div>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#features" className="hover:text-green-700 font-medium">Features</a>
          <a href="#waitlist" className="hover:text-green-700 font-medium">Join Waitlist</a>
        </nav>
      </header>

      {/* Hero Section with Background Video */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl">
            Map your land. Connect your club. Own the hunt.
          </h2>
          <p className="mt-6 text-xl max-w-2xl">
            A smarter way to organize your hunting land, stands, and members — all in one place.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Why ClubTrace?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">📍 Smart Stand Mapping</h3>
            <p>Tag, reserve, and view stand usage with mobile GPS check-ins.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">💬 Real-Time Club Chat</h3>
            <p>Coordinate hunts, share updates, and build camaraderie with built-in chat.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">📓 Club Management Tools</h3>
            <p>Log sightings, upload club rules, and manage files with ease.</p>
          </div>
        </div>
      </section>

      {/* Signup CTA */}
      <section id="waitlist" className="py-24 px-6 text-center bg-green-100">
        <h2 className="text-3xl font-bold mb-4">Launching This Season</h2>
        <p className="mb-8 text-lg">Be one of the first to modernize your club — join the waitlist today.</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="px-4 py-3 rounded border border-gray-300 w-full"
          />
          <button
            type="submit"
            className="bg-green-800 text-white px-6 py-3 rounded hover:bg-green-900 transition"
          >
            Join Waitlist
          </button>
        </form>
      </section>
    </main>
  );
}