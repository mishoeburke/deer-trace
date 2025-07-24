// FeaturesPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-green-900 text-white py-6 px-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">ClubTrace</Link>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/features" className="hover:underline font-semibold">Features</Link>
          </nav>
        </div>
      </header>

      <main className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Smart Mapping Features</h1>

        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-2">📍 Check-In / Check-Out</h2>
            <p>Members can check into stands directly from their phone using GPS. Admins can view live attendance and time spent in stand zones.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">⏱ Time Tracking</h2>
            <p>Admins can see how long members are actively hunting. Useful for safety, analytics, and stand rotation strategy.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">🎯 Reservation Rules</h2>
            <p>Members can reserve stands up to 2 hours before legal shooting time and after 12 PM for evening hunts. Real-time availability shown.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">🌐 Stand Status Visualization</h2>
            <p>Map icons change color based on reservation or check-in status, providing a clear visual overview of land usage.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">👀 Live Member Visibility</h2>
            <p>Admins can see where members are currently checked in, ensuring coordination and safety during hunts.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">🗺 Full Mapping Suite</h2>
            <ul className="list-disc list-inside">
              <li>Stand Mapping</li>
              <li>Feeder Locations</li>
              <li>Trail Camera Pins</li>
              <li>Property Line Boundaries</li>
              <li>Optional: Wind overlays, activity zones, or game paths</li>
            </ul>
          </div>
        </section>

        <div className="text-center mt-16">
          <Link to="/" className="text-green-800 font-semibold underline">← Back to Home</Link>
        </div>
      </main>
    </div>
  );
}