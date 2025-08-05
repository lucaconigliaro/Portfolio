import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const validateForm = (formData) => {
        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const subject = formData.get("subject")?.trim();
        const message = formData.get("message")?.trim();

        if (!name) {
            toast.error("Inserisci il nome.", { position: "top-center", theme: "dark" });
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            toast.error("Inserisci una email valida.", { position: "top-center", theme: "dark" });
            return false;
        }

        if (!subject || subject.length < 3) {
            toast.error("Inserisci un oggetto valido (almeno 3 caratteri).", { position: "top-center", theme: "dark" });
            return false;
        }

        if (!message || message.length < 10) {
            toast.error("Il messaggio deve contenere almeno 10 caratteri.", { position: "top-center", theme: "dark" });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        if (!validateForm(formData)) return;

        setLoading(true);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                form.reset();
                setShowModal(true);
                setTimeout(() => setShowModal(false), 4000);
            } else {
                toast.error(data.message || "Errore durante l'invio. Riprova.", { position: "top-center", theme: "dark" });
            }
        } catch {
            toast.error("Errore di rete. Riprova più tardi.", { position: "top-center", theme: "dark" });
        }

        setLoading(false);
    };
    return (
        <>
            <div className="about-container">
                <p className="about-btn">contattami</p>
            </div>
            <section className="contact">
                <form onSubmit={handleSubmit} noValidate>
                    <input
                        type="hidden"
                        name="access_key"
                        value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
                    />
                    <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: "none" }}
                    />
                    <input type="hidden" name="from_name" value="Luca Portfolio" />

                    <div className="input-box">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="field"
                            placeholder="Inserisci il tuo nome"
                            required
                            minLength={2}
                            maxLength={50}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="field"
                            placeholder="Inserisci la tua email"
                            required
                            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="subject">Oggetto</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="field"
                            placeholder="Inserisci l'oggetto"
                            required
                            minLength={3}
                            maxLength={100}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="message">Messaggio</label>
                        <textarea
                            id="message"
                            name="message"
                            className="field mess"
                            placeholder="Scrivi il tuo messaggio"
                            required
                            minLength={10}
                            rows={6}
                        />
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? "Invio in corso..." : "Invia Messaggio"}
                    </button>
                </form>

                {showModal && (
                    <div className="modal-overlay" onClick={() => setShowModal(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h3>Messaggio Inviato!</h3>
                            <p>Grazie per avermi contattato, ti risponderò presto.</p>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}