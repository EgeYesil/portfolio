import { useAppContext } from "../context/AppContext";
import data from "../data/data";

function Navbar() {
  const { language, darkMode, toggleLanguage, toggleDarkMode } = useAppContext();
  const t = data[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          {t.hero.name}
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-600 dark:text-gray-300">
          <li className="hover:text-blue-500 cursor-pointer">{t.nav.home}</li>
          <li className="hover:text-blue-500 cursor-pointer">{t.nav.skills}</li>
          <li className="hover:text-blue-500 cursor-pointer">{t.nav.profile}</li>
          <li className="hover:text-blue-500 cursor-pointer">{t.nav.projects}</li>
          <li className="hover:text-blue-500 cursor-pointer">{t.nav.contact}</li>
        </ul>

        <div className="flex gap-3">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {language === "tr" ? "EN" : "TR"}
          </button>
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;