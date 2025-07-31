import FrontSection from "../Components/FrontSection";
import Hero from "../Components/Hero";
import StackSection from "../Components/StackSection";

export default function Home() {
    return (
        <>
            {/* Main */}
            <main>
                {/* 2 Hero section */}
                <Hero />

                {/* 3 Esperienza e Carosello con i linguaggi che uso lato front */}
                <FrontSection />

                {/* Devo ancora rifletterci */}
                <section className="language-section">
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Coffee</p>
                </section>

                {/* 4 Sezione framework e librerie */}
                <h2 className="stack-presentation">Le tecnologie che uso</h2>
                <StackSection />
            </main>
        </>
    );
}