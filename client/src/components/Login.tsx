import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // εδώ κάνεις call στο backend API π.χ. /api/login
  };

  return (
    <div className="min-h-screen flex px-6 items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Σύνδεση
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Κωδικός</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
          >
            Σύνδεση
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Δεν έχεις λογαριασμό;{" "}
          <Link to="/register" className="text-indigo-600 font-medium">
            Εγγραφή
          </Link>
        </p>
      </div>
    </div>
  );
}
