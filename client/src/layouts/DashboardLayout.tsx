import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // ανοιχτό αρχικά σε desktop

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 🔹 Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-indigo-700 text-white transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          lg:static lg:inset-auto
          ${!sidebarOpen ? "lg:w-0" : "lg:w-64"}
        `}
      >
        <div className="p-6 flex items-center justify-between">
          <button
            className="text-white hover:text-gray-300 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            CLOSE
          </button>
        </div>

        <nav
          className={`space-y-2 p-4 ${!sidebarOpen ? "hidden lg:block" : ""}`}
        >
          <Link to="/dashboard" className="block hover:underline">
            Αρχική
          </Link>
          <Link to="/dashboard/settings" className="block hover:underline">
            Ρυθμίσεις
          </Link>
          <Link to="/dashboard/profile" className="block hover:underline">
            Προφίλ
          </Link>
        </nav>
      </aside>

      {/* 🔹 Overlay για mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 🔹 Κύριο περιεχόμενο */}
      <div className="flex-1 flex flex-col">
        {/* Header με κουμπί toggle */}
        <header className="p-4 bg-white shadow flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="text-indigo-700 hover:text-indigo-500 transition"
          >
            {!sidebarOpen ? "OPEN" : "CLOSE"}
          </button>
          <h1 className="text-lg font-semibold">Πίνακας Ελέγχου</h1>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
