import { useAppContext } from "../context/AppContext";
import data from "../data/data";

function Skills() {
  const { language } = useAppContext();
  const t = data[language];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t.skills.title}
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {data.skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center font-bold text-blue-500">
                {skill.icon}
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;