import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Progetti</Link></li>
                    <li><Link to="/contact">Contattami</Link></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><a href="https://github.com/tuo-username" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://linkedin.com/in/tuo-profilo" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:tuamail@gmail.com">Gmail</a></li>
                </ul>
            </div>
        </header>
    );
}