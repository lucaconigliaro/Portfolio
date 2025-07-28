import Carousel from "./Carousel";

export default function FrontSection() {

    return (
        <section className="front-section">
            <div className="xp-Section">
                <p>1 anno di</p>
                <p className="xp">XP</p>
                <p>con l’ecosistema frontend più diffuso</p>
            </div>

            {/* Carosello con le card */}
           <Carousel />
        </section>
    );
}