export default function FrontSection() {
    return (
        <section>
            <div className="xp-Section">
                <p>1 anno di</p>
                <p className="xp">XP</p>
                <p>con l’ecosistema frontend più diffuso</p>
            </div>

            {/* Carosello con le card */}
            <div>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        </section>
    );
}