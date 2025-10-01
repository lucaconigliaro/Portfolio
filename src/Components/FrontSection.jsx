import { motion } from "framer-motion";
import AnimatedXP from "./AnimatedXp";
import Carousel from "./Carousel";

export default function FrontSection() {
  return (
    <motion.section
      className="front-section"
      initial={{ opacity: 0, y: 20, filter: "brightness(0.8)" }}
      animate={{ opacity: 1, y: 0, filter: "brightness(1.2)" }}
      transition={{
        duration: 10,
        ease: "easeOut",
      }}
      whileHover={{ filter: "brightness(1.3)" }}
    >
      <div className="xp-Section">
        <p>1 anno di</p>
        <AnimatedXP />
        <p>con l’ecosistema frontend più diffuso</p>
      </div>

      {/* Carosello */}
      <Carousel />
    </motion.section>
  );
}