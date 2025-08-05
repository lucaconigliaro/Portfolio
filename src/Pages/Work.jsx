export default function Work() {

    const projects = [
        {
            title: "GamesHub",
            description: "Games Hub è una Single Page Application progettata per offrire un'esperienza utente intuitiva e fluida nella consultazione e gestione di un catalogo di videogiochi. L'applicazione consente di esplorare, cercare, filtrare, confrontare e salvare giochi preferiti, il tutto in un’interfaccia moderna e reattiva.",
            image: "/images/Gamelist.jpg",
            tags: ["React", "TypeScript", "Tailwind", "React Router", "Context API", "LocalStorage"],
            liveDemo: "https://games-hub-rho.vercel.app/",
            github: "https://github.com/lucaconigliaro/GamesHub"
        },
        {
            title: "Task Manager",
            description: "Un’applicazione web avanzata per la gestione dei task, sviluppata con React, che consente agli utenti di creare, modificare, organizzare ed eliminare task con una UI intuitiva, prestazioni ottimizzate e funzionalità avanzate come filtri, ricerca ottimizzata e modali di conferma.",
            image: "/images/task.png",
            tags: ["React", "JavaScript", "Bootstrap", "Context API"],
            github: "https://github.com/lucaconigliaro/TaskManager"
        },
        {
            title: "Quick Notes",
            description: "Quick Notes è una semplice applicazione web per prendere appunti veloci. L’app permette di aggiungere, modificare ed eliminare note, con salvataggio locale tramite localStorage e supporto a tema chiaro/scuro.",
            image: "/images/quicknotes.jpg",
            tags: ["HTML5", "JavaScript", "CSS3"],
            liveDemo: "https://quick-notes-nine.vercel.app/",
            github: "https://github.com/lucaconigliaro/Quick-Notes"
        },
        {
            title: "Retro Memory",
            description: "Una semplice implementazione del classico gioco Memory. L’obiettivo del gioco è mettere alla prova la memoria visiva del giocatore, abbinando tutte le coppie di carte identiche nel minor numero di errori possibile.",
            image: "/images/retro.jpg",
            tags: ["HTML5", "JavaScript", "CSS3"],
            liveDemo: "https://retro-memory.vercel.app/",
            github: "https://github.com/lucaconigliaro/RetroMemory?tab=readme-ov-file"
        },

    ];

    return (
        <>
            <div className="about-container">
                <p className="about-btn">progetti</p>
            </div>

            <section className="projects-grid">
                {projects.map(({ title, description, image, tags, liveDemo, github }, index) => (
                    <div className="project-card" key={index}>
                        <img src={image} alt={title} className="project-image" />
                        <div className="project-info">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <div className="project-tags">
                                {tags.map((tag, i) => (
                                    <span className="tag" key={i}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {liveDemo && (
                                    <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                )}
                                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}