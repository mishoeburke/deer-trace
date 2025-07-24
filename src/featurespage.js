// src/FeaturesPage.js
import Layout from "./Layout";

export default function FeaturesPage() {
  return (
    <Layout>
      <main className="bg-white text-gray-900 px-6 py-16">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold text-green-900 mb-10">
            ClubTrace Features
          </h1>
          <p className="text-lg mb-12 max-w-3xl leading-7">
            ClubTrace brings modern technology to hunting clubs — helping you manage land, simplify communication, and keep everyone safe and informed.
          </p>

          <div className="space-y-16">
            {/* Smart Mapping */}
            <div>
              <h2 className="text-2xl font-bold mb-2">📍 Smart Mapping</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Interactive stand, feeder, and trail camera markers</li>
                <li>Color-coded reservations and check-ins (admin-only viewable)</li>
                <li>Automatic time tracking: know how long someone sat in a stand</li>
                <li>Location-based check-in/out system from your phone</li>
                <li>View who is hunting where in real-time</li>
                <li>Draw property lines, zones, and access paths</li>
              </ul>
            </div>

            {/* Communication */}
            <div>
              <h2 className="text-2xl font-bold mb-2">💬 Member Communication</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Integrated group chat for clubs</li>
                <li>Auto-alerts when someone checks in or out</li>
                <li>Message threads for hunts, workdays, or club events</li>
              </ul>
            </div>

            {/* Admin Tools */}
            <div>
              <h2 className="text-2xl font-bold mb-2">🧑‍💼 Admin Tools</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Assign member roles and permissions</li>
                <li>Track dues and payment history</li>
                <li>Upload rules, waivers, and club documents</li>
                <li>Manage guest access and seasonal changes</li>
              </ul>
            </div>

            {/* Logging & Journals */}
            <div>
              <h2 className="text-2xl font-bold mb-2">📓 Harvest Logs & Sightings</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Submit deer logs with photos, GPS, and timestamp</li>
                <li>Club-wide view of harvest and activity data</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}