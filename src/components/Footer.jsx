import data from "../data/data";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm">© 2024 Ege Berk Yeşil. Tüm hakları saklıdır.</p>

        <div className="flex gap-6">
          <a href={data.social.github} target="_blank" rel="noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="mailto:egebrkk@gmail.com" className="hover:text-white transition">
            E-posta
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;