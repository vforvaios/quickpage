import TeamMember from "./TeamMember";

export default function AboutUs() {
  const members = [
    {
      name: "Βάιος Αναστασιάδης",
      position: "CEO/Founder",
    },
    {
      name: "Γιώργος Δεμέστιχας",
      position: "Marketing Manager",
    },
    {
      name: "Αθανασία Σπυροπούλου",
      position: "Senior Architect/Engineer",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8 text-center">Σχετικά με εμάς</h3>

        <p className="text-lg text-gray-700 mb-6">
          Στην <span className="font-semibold">QUICKPAGE</span> πιστεύουμε ότι
          κάθε επαγγελματίας αξίζει να έχει τη δική του online παρουσία χωρίς
          περίπλοκες διαδικασίες και μεγάλα κόστη.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Δημιουργήσαμε μία πλατφόρμα που σου επιτρέπει να αποκτήσεις ένα
          όμορφο, σύγχρονο και λειτουργικό website μέσα σε λίγα λεπτά. Είτε
          είσαι εστιάτορας, είτε freelancer, είτε μικρή επιχείρηση — έχουμε το
          κατάλληλο template για εσένα.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Η αποστολή μας
        </h2>
        <p className="text-gray-700 mb-6">
          Θέλουμε να κάνουμε το web πιο προσιτό. Στόχος μας είναι να δώσουμε σε
          μικρομεσαίες επιχειρήσεις τα εργαλεία για να ανταγωνίζονται ισάξια με
          τις μεγάλες εταιρείες στον ψηφιακό κόσμο.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Η ομάδα μας</h2>
        <p className="text-gray-700 mb-6">
          Είμαστε μια μικρή ομάδα από developers, designers και marketers με
          πάθος για το design, την τεχνολογία και τις μικρές επιχειρήσεις.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {members?.map((member) => (
            <TeamMember name={member.name} position={member.position} />
          ))}
        </div>
      </div>
    </div>
  );
}
