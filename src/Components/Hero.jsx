import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Assicurati di importare lo stile

export default function Hero() {
    const notify = () => {
        toast.success("CV scaricato con successo! Grazie per l'interesse 😁", {
            position: "bottom-right",
            autoClose: 3000,
            theme: "dark"
        });
    };

    return (
        <>
            {/* Hero section */}
            <section className="presentation-section">
                <div className="presentation-card">
                    <h1>Ciao, sono Luca</h1>
                    <p>Dopo un bootcamp <strong>fullstack intensivo</strong>, mi sono specializzato nel <strong>frontend</strong> con <strong>React</strong>. Unisco precisione tecnica e creatività, e sto ampliando le mie competenze sia lato frontend che backend, per crescere come sviluppatore completo.</p>

                    <div className="presentation-links">
                        <a
                            href="/resume/CV-Luca.pdf"
                            download="LucaConigliaro_CV"
                            className="btn-cv"
                            onClick={notify}
                        >
                            Download CV
                        </a>

                        <Link to="/projects" className="btn-projects">
                            Progetti
                        </Link>
                    </div>
                </div>

                <div className="presentation-img">
                </div>

                <ToastContainer />
            </section>
        </>
    );
}