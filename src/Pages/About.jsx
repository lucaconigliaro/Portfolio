import { motion } from "framer-motion";

export default function About() {
  // Variants per animazione dei paragrafi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <motion.h1
          className="about-btn"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Curiosi di sapere qualcosa su di me?
        </motion.h1>
      </div>

      <div className="about-columns">
        <motion.div
          className="about-me"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.p variants={itemVariants}>
            Ciao! Mi chiamo Luca, ho 29 anni e sono uno sviluppatore frontend
            con una forte passione per la tecnologia e per i meccanismi che
            regolano il funzionamento delle cose.
          </motion.p>

          <motion.p variants={itemVariants}>
            Dopo sei anni di esperienza nel settore della ristorazione e un anno
            in ambito produttivo, ho deciso di intraprendere un nuovo percorso
            professionale. Questa scelta ha rappresentato una svolta importante:
            investire su me stesso e orientarmi verso il mondo dello sviluppo
            web.
          </motion.p>

          <motion.p variants={itemVariants}>
            Ho frequentato un corso intensivo di 700 ore con Boolean per
            diventare fullstack developer, scegliendo poi di specializzarmi sul
            frontend. In particolare, ho approfondito React, JavaScript avanzato
            e le basi di TypeScript. Sto inoltre ampliando le mie competenze sul
            backend, con l’obiettivo di apprendere PHP e Laravel, perché credo
            che la versatilità sia un elemento strategico in questo settore.
          </motion.p>

          <motion.p variants={itemVariants}>
            Mi considero una persona curiosa, determinata e con un desiderio
            costante di crescita. Pongo grande attenzione sia allo sviluppo
            delle mie competenze tecniche sia al miglioramento personale.
          </motion.p>

          <motion.p variants={itemVariants}>
            La mia esperienza è stata caratterizzata da cambiamenti e scelte
            difficili, ma ogni sfida affrontata ha rappresentato un’occasione di
            crescita. Credo che la resilienza e la capacità di adattarsi siano
            qualità fondamentali per affrontare un mondo in costante evoluzione
            come quello tecnologico.
          </motion.p>

          <motion.p variants={itemVariants}>
            Oltre al mio percorso professionale, sono appassionato di cinema,
            anime e videogiochi, elementi che riflettono la mia creatività e la
            mia capacità di osservare la realtà da prospettive diverse.
          </motion.p>

          <motion.p variants={itemVariants}>
            Questo nuovo capitolo della mia vita non sarebbe cominciato senza il
            sostegno di chi ha creduto in me: in particolare la mia compagna, la
            persona che mi ha incoraggiato a compiere questo salto importante.
          </motion.p>

          <motion.p variants={itemVariants}>
            Sono convinto che il confronto e la collaborazione con le persone
            siano una delle più grandi fonti di ispirazione. Ogni relazione è
            un’occasione per imparare e, allo stesso tempo, per lasciare un
            contributo positivo.
          </motion.p>
        </motion.div>

        <motion.img
          className="about-image"
          src="/images/profile.jpg"
          alt="Luca Conigliaro"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        />
      </div>

      <motion.div
        className="short"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p>
          <strong>
            Un piccolo riassunto per chi preferisce arrivare subito al punto:
          </strong>
        </p>
        <ul>
          <li>- Ex barista oggi sviluppatore frontend</li>
          <li>
            - Specializzato in React e JavaScript, con attenzione al codice
            pulito
          </li>
          <li>- In crescita sul backend: motivato ad ampliare le competenze</li>
          <li>- Aperto a stage, tirocini, apprendistato o ruoli junior.</li>
        </ul>
        <p className="trust">
          Se credi nel mio percorso, sarò felice di conoscerti!
        </p>
      </motion.div>
    </section>
  );
}
