export default function Footer() {
    return (
        <footer>
            {/* Prima riga */}
            <div className="footer-up">
                <div>
                    <p>Contattami</p>
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
            </div>

            {/* Seconda riga */}
            <div className="footer-down">
                <p>LucaConigliaro 2025</p>
            </div>
        </footer>
    );
}