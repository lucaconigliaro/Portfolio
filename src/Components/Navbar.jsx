import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "progetti", path: "/projects" },
  ];

  const contactOptions = [
    { name: "GitHub", href: "https://github.com/lucaconigliaro", external: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/luca-conigliaro-5636b1352/", external: true },
    { name: "Gmail", href: "mailto:lucaconigliaro1@gmail.com", external: true },
    { name: "Form", path: "/contact", external: false },
  ];

  const linkVariants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } };
  const dropdownVariants = { hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -5 } };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.ul className="links" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        {navLinks.map(link => (
          <motion.li key={link.name} variants={linkVariants} whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <NavLink to={link.path} className={({ isActive }) => (isActive ? "active" : "")}>
              {link.name}
            </NavLink>
          </motion.li>
        ))}

        {/* Dropdown */}
        <motion.li
          className="dropdown-container"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <motion.button
            className="dropdown-trigger"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            contattami
          </motion.button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className="dropdown-menu"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {contactOptions.map(option => (
                  <motion.div
                    key={option.name}
                    className="dropdown-item"
                    whileHover={{ backgroundColor: "rgba(159,131,228,0.1)", x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {option.external ? (
                      <a href={option.href} target="_blank" rel="noopener noreferrer" className="dropdown-link">
                        <span>{option.name}</span>
                      </a>
                    ) : (
                      <NavLink to={option.path} className="dropdown-link">
                        <span>{option.name}</span>
                      </NavLink>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      </motion.ul>
    </motion.header>
  );
}