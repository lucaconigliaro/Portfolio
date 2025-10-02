import { motion } from "framer-motion";

export default function Work() {
  const projects = [
    {
      title: "Travel Journal",
      description:
        "Travel Journal permette di creare un diario di viaggio digitale...",
      image: "/images/travel.png",
      tags: ["React", "JavaScript", "Tailwind", "React Router", "Context API", "Leaflet", "Supabase"],
      liveDemo: "https://travel-journal-app-two.vercel.app/",
      github: "https://github.com/lucaconigliaro/Travel-Journal",
    },
    {
      title: "GamesHub",
      description:
        "Games Hub è una Single Page Application progettata per offrire un'esperienza utente...",
      image: "/images/Gamelist.jpg",
      tags: ["React", "TypeScript", "Tailwind", "React Router", "Context API", "LocalStorage"],
      liveDemo: "https://games-hub-rho.vercel.app/",
      github: "https://github.com/lucaconigliaro/GamesHub",
    },
    {
      title: "Task Manager",
      description:
        "Un'applicazione web avanzata per la gestione dei task...",
      image: "/images/task.png",
      tags: ["React", "JavaScript", "Bootstrap", "Context API"],
      github: "https://github.com/lucaconigliaro/TaskManager",
    },
    {
      title: "Quick Notes",
      description:
        "Quick Notes è una semplice applicazione web per prendere appunti veloci...",
      image: "/images/quicknotes.jpg",
      tags: ["HTML5", "JavaScript", "CSS3"],
      liveDemo: "https://quick-notes-nine.vercel.app/",
      github: "https://github.com/lucaconigliaro/Quick-Notes",
    },
    {
      title: "Retro Memory",
      description:
        "Una semplice implementazione del classico gioco Memory...",
      image: "/images/retro.jpg",
      tags: ["HTML5", "JavaScript", "CSS3"],
      liveDemo: "https://retro-memory.vercel.app/",
      github: "https://github.com/lucaconigliaro/RetroMemory?tab=readme-ov-file",
    },
  ];

  // Variants per le card (staggered)
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="about-container">
        <motion.h1
          className="about-btn"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          I miei progetti
        </motion.h1>
      </div>

      <motion.section
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {projects.map(({ title, description, image, tags, liveDemo, github }, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 8px 20px rgba(94, 131, 228, 0.4)" }}
          >
            <img src={image} alt={title} className="project-image" />

            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>

              <div className="project-tags">
                {tags.map((tag, i) => (
                  <motion.span className="tag" key={i} variants={tagVariants}>
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="project-links">
                {liveDemo && (
                  <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                <a href={github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}