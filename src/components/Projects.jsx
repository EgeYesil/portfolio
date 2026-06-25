import { useAppContext } from "../context/AppContext";
import data from "../data/data";

function Projects() {
  const { language } = useAppContext();
  const t = data[language];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t.projects.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="h-40 bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-5xl">
                💻
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.liveUrl} className="flex-1 text-center py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
                    {t.projects.liveDemo}
                  </a>
                  <a href={project.sourceUrl} className="flex-1 text-center py-2 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                    {t.projects.sourceCode}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;