import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔹 Ελέγχουμε το μέγεθος της οθόνης
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024; // Tailwind breakpoint lg = 1024px
      setIsMobile(mobile);
      setSidebarOpen(!mobile); // αν είναι desktop → ανοιχτό, αν mobile → κλειστό
    };

    handleResize(); // έλεγχος στο mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 🔹 Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-indigo-700 text-white transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          lg:static lg:inset-auto lg:translate-x-0
        `}
      >
        <div className="p-6 flex items-center justify-between lg:justify-center">
          <h2 className="text-xl font-bold">Dashboard</h2>

          {/* Κουμπί κλεισίματος ΜΟΝΟ για mobile */}
          {isMobile && (
            <button
              className="text-white hover:text-gray-300"
              onClick={() => setSidebarOpen(false)}
            >
              CLOSE
            </button>
          )}
        </div>

        <nav className="space-y-2 p-4">
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
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 🔹 Κύριο περιεχόμενο */}
      <div className="flex-1 flex flex-col">
        <header className="p-4 bg-white shadow flex items-center justify-between">
          {/* Κουμπί ανοίγματος ΜΟΝΟ σε mobile */}
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-indigo-700 hover:text-indigo-500 transition"
            >
              OPEN
            </button>
          )}
          <h1 className="text-lg font-semibold">Πίνακας Ελέγχου</h1>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
