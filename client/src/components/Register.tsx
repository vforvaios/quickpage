import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Register:", data);
    // π.χ. await api.post("/api/register", data);
  };

  return (
    <div className="min-h-screen px-6 flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Εγγραφή
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700">Όνομα</label>
            <input
              type="text"
              placeholder="Το όνομά σου"
              className="w-full p-3 border rounded-lg"
              {...register("name", { required: "Το όνομα είναι υποχρεωτικό" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border rounded-lg"
              {...register("email", {
                required: "Το email είναι υποχρεωτικό",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Μη έγκυρη διεύθυνση email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700">Κωδικός</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border rounded-lg"
              {...register("password", {
                required: "Ο κωδικός είναι υποχρεωτικός",
                minLength: {
                  value: 6,
                  message: "Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {isSubmitting ? "Εγγραφή..." : "Εγγραφή"}
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
