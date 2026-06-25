import { useAppContext } from "../context/AppContext";
import data from "../data/data";

function Hero() {
  const { language } = useAppContext();
  const t = data[language];

  return (
    <section className="min-h-screen flex items-center justify-between max-w-6xl mx-auto px-6 pt-20">
      
      <div className="flex-1">
        <p className="text-blue-500 font-medium mb-2">{t.hero.greeting}</p>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {t.hero.name}
        </h1>
        <h2 className="text-2xl text-gray-500 dark:text-gray-400 mb-6">
          {t.hero.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
          {t.hero.description}
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          {t.hero.button}
        </button>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <div className="w-72 h-72 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-8xl">
          👨‍💻
        </div>
      </div>

    </section>
  );
}

export default Hero;