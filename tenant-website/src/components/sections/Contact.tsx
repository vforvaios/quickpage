export default function Contact() {
  return (
    <div className="mb-[30px]">
      <h1>Επικοινωνία</h1>
      <form className="mx-auto max-w-sm space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm focus:outline-none focus:border-gray-900"
        />

        <textarea
          rows={3}
          placeholder="Message"
          className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm focus:outline-none focus:border-gray-900"
        />

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
