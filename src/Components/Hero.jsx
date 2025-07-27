import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
            {/* Hero section */}
            <section className="presentation-section">

                <div className="presentation-card">
                    <h1>Ciao, sono Luca</h1>
                    <p>Dopo un bootcamp fullstack intensivo, mi sono specializzato nel frontend con React. Unisco precisione tecnica e creatività, e sto ampliando le mie competenze sia lato frontend che backend, per crescere come sviluppatore completo.</p>

                    <div className="presentation-links">
                        <button className="btn-cv">Download CV</button>
                        <Link to="/projects" className="btn-projects">Progetti</Link>
                    </div>

                </div>

                <div className="presentation-img">
                    <img src="/photos/profile.JPG" alt="" />
                </div>

            </section>
        </>
    );
}