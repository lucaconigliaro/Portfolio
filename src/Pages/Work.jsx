// Work.jsx
export default function Work() {
  const projects = [
    {
      title: "Travel Journal",
      description:
        "Travel Journal permette di creare un diario di viaggio digitale, memorizzando esperienze, foto, stati d'animo e riflessioni personali. Ogni tappa è un post con contenuti multimediali, geolocalizzazione e valutazioni personali. Lo scopo è combinare gestione dati e design moderno per un'esperienza utente completa.",
      image: "/images/travel.png",
      tags: ["React", "JavaScript", "Tailwind", "React Router", "Context API", "Leaflet", "Supabase"],
      liveDemo: "https://travel-journal-app-two.vercel.app/",
      github: "https://github.com/lucaconigliaro/Travel-Journal",
    },
    {
      title: "GamesHub",
      description:
        "Games Hub è una Single Page Application progettata per offrire un'esperienza utente intuitiva e fluida nella consultazione e gestione di un catalogo di videogiochi. L'applicazione consente di esplorare, cercare, filtrare, confrontare e salvare giochi preferiti, il tutto in un'interfaccia moderna e reattiva.",
      image: "/images/Gamelist.jpg",
      tags: ["React", "TypeScript", "Tailwind", "React Router", "Context API", "LocalStorage"],
      liveDemo: "https://games-hub-rho.vercel.app/",
      github: "https://github.com/lucaconigliaro/GamesHub",
    },
    {
      title: "Task Manager",
      description:
        "Un'applicazione web avanzata per la gestione dei task, sviluppata con React, che consente agli utenti di creare, modificare, organizzare ed eliminare task con una UI intuitiva, prestazioni ottimizzate e funzionalità avanzate come filtri, ricerca ottimizzata e modali di conferma.",
      image: "/images/task.png",
      tags: ["React", "JavaScript", "Bootstrap", "Context API"],
      github: "https://github.com/lucaconigliaro/TaskManager",
    },
    {
      title: "Quick Notes",
      description:
        "Quick Notes è una semplice applicazione web per prendere appunti veloci. L'app permette di aggiungere, modificare ed eliminare note, con salvataggio locale tramite localStorage e supporto a tema chiaro/scuro.",
      image: "/images/quicknotes.jpg",
      tags: ["HTML5", "JavaScript", "CSS3"],
      liveDemo: "https://quick-notes-nine.vercel.app/",
      github: "https://github.com/lucaconigliaro/Quick-Notes",
    },
    {
      title: "Retro Memory",
      description:
        "Una semplice implementazione del classico gioco Memory. L'obiettivo del gioco è mettere alla prova la memoria visiva del giocatore, abbinando tutte le coppie di carte identiche nel minor numero di errori possibile.",
      image: "/images/retro.jpg",
      tags: ["HTML5", "JavaScript", "CSS3"],
      liveDemo: "https://retro-memory.vercel.app/",
      github: "https://github.com/lucaconigliaro/RetroMemory?tab=readme-ov-file",
    },
  ];

  return (
    <>
      <div className="about-container mb-8">
        <p className="inline-block bg-yellow-400/20 text-yellow-400 font-semibold px-4 py-1 rounded-full uppercase tracking-wide text-sm border border-yellow-500/30">
          progetti
        </p>
      </div>

      <section className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {projects.map(({ title, description, image, tags, liveDemo, github }, index) => (
          <div
            className="project-card bg-gradient-to-br from-gray-900 to-black rounded-xl border border-yellow-500/20 overflow-hidden flex flex-col hover:border-yellow-500/40 transition-all duration-300"
            key={index}
          >
            <img src={image} alt={title} className="project-image w-full h-48 object-cover" />
            <div className="project-info p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">{title}</h3>
              <p className="text-gray-400 flex-grow mb-4">{description}</p>
              <div className="project-tags flex flex-wrap gap-2 mb-4">
                {tags.map((tag, i) => (
                  <span
                    className="tag bg-yellow-400/10 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full border border-yellow-500/20"
                    key={i}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links mt-auto flex gap-4">
                {liveDemo && (
                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-yellow-400 hover:bg-yellow-300 transition px-4 py-2 rounded-lg font-medium"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-black transition px-4 py-2 rounded-lg font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}