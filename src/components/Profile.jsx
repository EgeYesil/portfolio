import { useAppContext } from "../context/AppContext";
import data from "../data/data";

function Profile() {
  const { language } = useAppContext();
  const t = data[language];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t.profile.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {t.profile.basicInfo}
            </h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-medium">{t.profile.name}</span>
                <span>Ege Berk Yeşil</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-medium">{t.profile.age}</span>
                <span>30</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-medium">{t.profile.location}</span>
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-medium">{t.profile.email}</span>
                <span>egebrkk@gmail.com</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-medium">GitHub</span>
                <a href={data.social.github} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                  EgeYesil
                </a>
              </li>
              <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="font-medium">LinkedIn</span>
                <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                  egeysl
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {t.profile.aboutMe}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.profile.aboutText}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;