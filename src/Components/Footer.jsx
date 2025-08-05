import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer-up">
                <div>
                    <Link to="contact">Contattami</Link>
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
            </div>

            <div className="footer-down">
                <p>&copy; Luca Conigliaro 2025</p></div>
        </footer>
    );
}