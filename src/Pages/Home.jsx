import { motion } from "framer-motion";
import FrontSection from "../Components/FrontSection";
import StackSection from "../Components/StackSection";
import Hero from "../Components/Hero";

export default function Home() {
  const languages = ["JavaScript", "React", "Coffee"];

  return (
    <>
      <main>
        <Hero />
        <FrontSection />

        <section
          className="language-section"
          style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
        >
          {languages.map((lang, index) => (
            <motion.p
              key={lang}
              initial={{ opacity: 0, x: index % 2 === 0 ? "-100vw" : "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1.2 + index * 0.2 , type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.5 }}
            >
              {lang}
            </motion.p>
          ))}
        </section>
        <h2 className="stack-presentation">Le tecnologie che uso</h2>
        <StackSection />
      </main>
    </>
  );
}