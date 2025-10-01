const features = [
  {
    title: "Templates",
    desc: "Επιλογή από έτοιμα templates που προσαρμόζονται.",
  },
  {
    title: "Reservation System",
    desc: "Ενσωματωμένο σύστημα κρατήσεων για την επιχείρηση σου.",
  },
  { title: "Dashboard", desc: "Διαχειρίσου το περιεχόμενό σου εύκολα." },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h3 className="text-3xl font-bold mb-12">Τι προσφέρουμε</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
