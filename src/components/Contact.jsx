import { useAppContext } from "../context/AppContext";
import data from "../data/data";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

function Contact() {
  const { language } = useAppContext();
  const t = data[language];
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://reqres.in/api/workintech", form);
      toast.success("Mesajınız gönderildi! ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Bir hata oluştu! ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t.contact.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          {t.contact.description}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Adınız"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="E-posta"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Mesajınız"
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Gönderiliyor..." : t.contact.button}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;