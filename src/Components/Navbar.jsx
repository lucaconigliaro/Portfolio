import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar">
            <div>
                <ul className="links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            progetti
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            contattami
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="social-icons">
                    <li>
                        <a href="https://github.com/lucaconigliaro" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/Group.png" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/luca-conigliaro-5636b1352/" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/linkedin-plain.png" alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:lucaconigliaro1@gmail.com">
                            <img src="/logos/Group2.png" alt="Gmail" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}