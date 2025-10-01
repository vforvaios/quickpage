export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-xl mx-auto text-center px-6">
        <h3 className="text-3xl font-bold mb-8">Επικοινωνία</h3>
        <form className="flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Όνομα"
            className="border p-3 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
            required
          />
          <textarea
            placeholder="Μήνυμα"
            rows={4}
            className="border p-3 rounded"
            required
          />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            Αποστολή
          </button>
        </form>
      </div>
    </section>
  );
}
