// featurespage.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white shadow">
        <Link to="/" className="text-2xl font-extrabold text-green-800">ClubTrace</Link>
        <nav className="space-x-6 font-semibold">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <a href="#smartmapping" className="hover:text-green-700">Smart Mapping</a>
          <a href="#communication" className="hover:text-green-700">Communication</a>
          <a href="#management" className="hover:text-green-700">Club Tools</a>
        </nav>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Explore ClubTrace Features</h1>

        {/* Smart Mapping */}
        <div id="smartmapping" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">📍 Smart Mapping</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Check-in and Check-out using your phone’s location</li>
            <li>Time tracking for stands (admin-only visibility)</li>
            <li>Dynamic color-coded stand icons (reserved vs. occupied)</li>
            <li>Live map view showing who is hunting where</li>
            <li>Map your stands, feeders, trail cameras, and property lines</li>
            <li>Supports multiple layers and future integrations</li>
          </ul>
        </div>

        {/* Communication */}
        <div id="communication" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">💬 Club Communication</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Integrated chat and messaging system</li>
            <li>Group threads for hunts, workdays, and social updates</li>
            <li>Push notifications and club-wide announcements</li>
          </ul>
        </div>

        {/* Club Tools */}
        <div id="management">
          <h2 className="text-2xl font-bold mb-4">🧾 Club Management Tools</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Harvest logging with photos, stand zones, and notes</li>
            <li>Annual dues tracking with reminders and payment status</li>
            <li>Guest access controls and role-based permissions</li>
            <li>Upload club rules, PDFs, and waivers</li>
            <li>Admin dashboard for simple club oversight</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
