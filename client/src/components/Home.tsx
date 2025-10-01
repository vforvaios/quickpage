import heroIllustration from "../assets/hero-illustration.jpg";
import Features from "./Features";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">
              Δημιούργησε το site της επιχείρησής σου σε 5 λεπτά
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Έτοιμα templates, πλήρης διαχείριση και online κρατήσεις.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700">
              Ξεκίνα τώρα
            </button>
          </div>
          <div className="flex-1">
            <img src={heroIllustration} alt="Illustration" className="w-full" />
          </div>
        </div>
      </section>

      <Features />
      <Pricing />
    </div>
  );
};

export default Home;
