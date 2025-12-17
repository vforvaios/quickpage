import { useForm } from "react-hook-form";

type ContactForm = {
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    // π.χ. send to API
    reset();
  };

  return (
    <div className="mb-[30px]">
      <h1>Επικοινωνία</h1>
      <form
        className="mx-auto max-w-sm space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Το email είναι υποχρεωτικό",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Μη έγκυρο email",
            },
          })}
          className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm focus:outline-none focus:border-gray-900"
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}

        <textarea
          rows={3}
          placeholder="Message"
          {...register("message", {
            required: "Το μήνυμα είναι υποχρεωτικό",
            minLength: {
              value: 5,
              message: "Τουλάχιστον 5 χαρακτήρες",
            },
          })}
          className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm focus:outline-none focus:border-gray-900"
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-md bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
