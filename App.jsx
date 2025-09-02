import React, { useState } from "react";
import { motion } from "framer-motion";
import { en, kr } from "./i18n";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = lang === "en" ? en : kr;

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      <header className="bg-blue-700 text-white text-center py-10 relative">
        <button
          onClick={() => setLang(lang === "en" ? "kr" : "en")}
          className="absolute right-6 top-6 text-xs bg-white/20 border px-3 py-1 rounded"
        >
          {t.header.lang}
        </button>
        <h1 className="text-4xl font-bold">{t.header.title}</h1>
        <p className="mt-2 text-lg">{t.header.subtitle}</p>
        <p className="mt-1 text-sm italic">{t.header.tagline}</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <section id="about">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">{t.nav.about}</h2>
          {t.about.map((p, i) => (<p key={i} className="mb-2">{p}</p>))}
        </section>

        <section id="experience">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">{t.nav.experience}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {t.exp.map((e, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-white p-6 shadow rounded-xl">
                <h3 className="font-bold">{e.title}</h3>
                <p className="text-sm text-gray-600">{e.subtitle}</p>
                <p className="mt-2">{e.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="education">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">{t.nav.education}</h2>
          <ul className="list-disc ml-6">
            {t.edu.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>

        <section id="skills">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">{t.nav.skills}</h2>
          <ul className="list-disc ml-6 grid sm:grid-cols-2 gap-2">
            {t.skills.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">{t.contact.title}</h2>
          <p><strong>{t.contact.email}:</strong> <a href="mailto:yunsjay@gmail.com" className="text-blue-600">yunsjay@gmail.com</a></p>
          <p><strong>{t.contact.phone}:</strong> <a href="tel:+821055905588" className="text-blue-600">+82-10-5590-5588</a></p>
          <p><strong>{t.contact.linkedin}:</strong> <a href="https://www.linkedin.com/in/your-linkedin-id" className="text-blue-600">linkedin.com/in/your-linkedin-id</a></p>
          <div className="mt-4 space-x-4">
            <a href="/resume_en.pdf" download className="bg-blue-600 text-white px-4 py-2 rounded-lg">📄 Resume (EN)</a>
            <a href="/resume_kr.pdf" download className="bg-green-600 text-white px-4 py-2 rounded-lg">📄 Resume (KR)</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Seok Joong (Jay) Yun
      </footer>
    </div>
  );
}
