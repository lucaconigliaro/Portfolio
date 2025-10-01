import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
  const notify = () => {
    toast(
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        CV scaricato con successo! Grazie per l'interesse 😁
      </motion.div>,
      {
        position: "bottom-right",
        autoClose: 4000,
        theme: "dark",
        icon: "📄",
      }
    );
  };

  const texts = [
    "Ciao, sono Luca",
    "Frontend Developer",
    "Fullstack in progress",
  ];

  // Config
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 60;
  const PAUSE_AFTER_COMPLETE = 1000;
  const PAUSE_AFTER_DELETE = 500;

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = texts[textIndex];
  const displayText = fullText.substring(0, charIndex);

  useEffect(() => {
    let timeoutId;
    const isComplete = charIndex === fullText.length;
    const isEmpty = charIndex === 0;

    let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    if (!isDeleting && isComplete) delay = PAUSE_AFTER_COMPLETE;
    if (isDeleting && isEmpty) delay = PAUSE_AFTER_DELETE;

    timeoutId = setTimeout(() => {
      if (!isDeleting) {
        if (isComplete) {
          setIsDeleting(true);
        } else {
          setCharIndex((prev) => prev + 1);
        }
      } else {
        if (isEmpty) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        } else {
          setCharIndex((prev) => prev - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, fullText, texts.length]);

  return (
    <section className="presentation-section">
      <div className="presentation-card">
        {/* Titolo */}
        <motion.h1
          style={{
            minHeight: "2.6rem",
            display: "",
            alignItems: "center",
            gap: "6px",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: -4, filter: "brightness(0.8)" }}
          animate={{ opacity: 1, y: 0, filter: "brightness(1.5)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span>{displayText}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontWeight: 700 }}
          >
            |
          </motion.span>
        </motion.h1>

        {/* Paragrafo e bottoni */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 1 }}
        >
          Dopo un bootcamp <strong>fullstack intensivo</strong>, mi sono
          specializzato nel <strong>frontend</strong> con <strong>React</strong>
          . Unisco precisione tecnica e creatività, e sto ampliando le mie
          competenze sia lato frontend che backend, per crescere come
          sviluppatore completo.
        </motion.p>

        <motion.div className="presentation-links">
          {/* Bottone CV */}
          <motion.a
            href="/resume/CV-Luca.pdf"
            download="LucaConigliaro_CV"
            className="btn-cv"
            onClick={notify}
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
          >
            Download CV
          </motion.a>

          {/* Bottone Progetti */}
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
            className="btn-projects"
          >
            <Link to="/projects">Progetti</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
