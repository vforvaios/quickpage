import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register:", form);
    // εδώ κάνεις call στο backend API π.χ. /api/register
  };

  return (
    <div className="min-h-screen px-6 flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Εγγραφή
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Όνομα</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border rounded-lg"
              placeholder="Το όνομά σου"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded-lg"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Κωδικός</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border rounded-lg"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
          >
            Εγγραφή
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Έχεις ήδη λογαριασμό;{" "}
          <Link to="/login" className="text-indigo-600 font-medium">
            Σύνδεση
          </Link>
        </p>
      </div>
    </div>
  );
}
