import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <main className="min-h-screen">
        <Outlet /> {/* εδώ μπαίνουν οι public σελίδες */}
      </main>
    </>
  );
}
