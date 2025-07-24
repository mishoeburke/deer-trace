import { useState } from "react";
import deerVideo from "./deer-bg.mp4";
import logo from "./clubtrace-logo.png";

export default function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyHehXtbvG34UveCyn9SJZdQpkh_z-QvBddXrv0gk8vJliDi431BpYsKCwXrnwzeQBaOw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
        }),
      });

      if (response.ok) {
        alert(`Thanks, ${email}! You're on the waitlist.`);
        setEmail("");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src={deerVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Header */}
      <header className="sticky top-0 z-20 bg-black bg-opacity-70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logo} alt="ClubTrace Logo" className="h-10 md:h-12" />
          <nav className="space-x-6 text-sm md:text-base">
            <a href="#why" className="hover:text-green-300">Why ClubTrace</a>
            <a href="#features" className="hover:text-green-300">Features</a>
            <a href="#signup" className="hover:text-green-300">Join Waitlist</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="z-10 relative text-center pt-40 pb-60 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6">
          ClubTrace
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium drop-shadow-sm">
          Map your land, streamline communication, and stay connected in the field.
        </p>
      </section>

      {/* Features */}
      <section id="why" className="z-10 relative py-24 px-6 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16">Why ClubTrace?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">📍 Smart Mapping</h3>
            <p>Tag stands, feeders, and zones. Check-in with GPS. Color-coded reservations.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">💬 Built-in Chat</h3>
            <p>Stay in sync with group messaging for hunts, workdays, and sightings.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">📓 Private Club Hub</h3>
            <p>Admins get tools to track dues, manage members, and post club rules + waivers.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="z-10 relative py-24 px-6 text-center bg-green-100 text-gray-900">
        <h2 className="text-3xl font-bold mb-4">Launching This Season</h2>
        <p className="mb-8 text-lg">Be one of the first to modernize your hunting club.</p>
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