import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar">
            <div>
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Progetti</Link></li>
                    <li><Link to="/contact">Contattami</Link></li>
                </ul>
            </div>

            <div>
                <ul className="social-icons">
                    <li>
                        <a href="https://github.com/lucaconigliaro" target="_blank" rel="noopener noreferrer">
                            <img src="src/assets/logos/GitHub.png" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/luca-conigliaro-5636b1352/" target="_blank" rel="noopener noreferrer">
                            <img src="src/assets/logos/LinkedIn.png" alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:lucaconigliaro1@gmail.com">
                            <img src="src/assets/logos/gmail-new.png" alt="Gmail" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}