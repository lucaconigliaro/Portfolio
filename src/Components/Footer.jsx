import { Link } from "react-router-dom";

export default function Footer() {
  const socials = [
    {
      href: "https://github.com/lucaconigliaro",
      src: "/logos/Group.png",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/luca-conigliaro-5636b1352/",
      src: "/logos/linkedin-plain.png",
      alt: "LinkedIn",
    },
    {
      href: "mailto:lucaconigliaro1@gmail.com",
      src: "/logos/Group2.svg",
      alt: "Gmail",
    },
  ];

  return (
    <footer>
      <div className="footer-up">
        <div>
          <Link to="contact">Contattami</Link>
        </div>

        <div>
          <ul className="social-icons">
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    social.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                >
                  <img src={social.src} alt={social.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-down">
        <p>&copy; Luca Conigliaro 2025</p>
      </div>
    </footer>
  );
}
