const plans = [
  {
    name: "Free",
    desc: "Βασικές λειτουργίες",
    price: "0€/μήνα",
    highlight: false,
  },
  {
    name: "Pro",
    desc: "Domain, templates & περισσότερα",
    price: "9.90€/μήνα",
    highlight: true,
  },
  {
    name: "Business",
    desc: "Όλες οι λειτουργίες",
    price: "19.90€/μήνα",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h3 className="text-3xl font-bold mb-12">Τιμολόγηση</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-6 border ${
                p.highlight ? "bg-indigo-50 border-indigo-600" : "bg-white"
              }`}
            >
              <h4 className="text-xl font-semibold mb-2">{p.name}</h4>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <span className="block text-2xl font-bold mb-4">{p.price}</span>
              <button
                className={`px-4 py-2 rounded-lg ${
                  p.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                Επιλογή
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
