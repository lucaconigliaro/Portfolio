import { motion } from "framer-motion";

export default function StackSection() {
  const cols = [
    {
      title: "Frontend Design",
      items: [
        { name: "React", src: "/logos/React.png" },
        { name: "Vite", src: "/logos/Vite.svg" },
        { name: "Figma", src: "/logos/Figma.png" },
        { name: "Jest", src: "/logos/Jest.png" },
        { name: "Bootstrap", src: "/logos/Bootstrap.png" },
        { name: "Tailwind", src: "/logos/Tailwind.png" },
      ],
    },
    {
      title: "Linguaggi",
      items: [
        { name: "JavaScript", src: "/logos/JavaScript.white.png" },
        { name: "TypeScript", src: "/logos/TypeScript.png" },
      ],
    },
    {
      title: "Deploy",
      items: [
        { name: "GitHub", src: "/logos/Group.png" },
        { name: "Vercel", src: "/logos/Vercel.png" },
      ],
    },
    {
      title: "Back-end",
      items: [
        { name: "Node.js", src: "/logos/node.png" },
        { name: "Express.js", src: "/logos/Express.webp" },
        { name: "Postman", src: "/logos/Postman.webp" },
        { name: "MySQL", src: "/logos/MySql2.png" },
      ],
    },
    {
      title: "Next Step",
      items: [
        { name: "PHP", src: "/logos/php.png" },
        { name: "Laravel", src: "/logos/Laravel.png" },
      ],
    },
  ];

  const colVariants = {
    hiddenUp: { opacity: 0, y: -30 },
    hiddenDown: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="full-width-breakout">
      <div className="tech-container">
        <div className="tech-row">
          {cols.map((col, i) => (
            <motion.div
              className="tech-col"
              key={col.title}
              initial={i % 2 === 0 ? "hiddenUp" : "hiddenDown"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={colVariants}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            >
              <h5>{col.title}</h5>
              <ul>
                {col.items.map((item) => (
                  <li className="img-lang" key={item.name}>
                    <div className="logo-wrapper">
                      <img src={item.src} alt={item.name} />
                    </div>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
