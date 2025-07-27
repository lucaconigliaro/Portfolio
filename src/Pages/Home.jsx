import Hero from "../Components/Hero";

export default function Home() {
    return (
        <>
            {/* Main */}
            <main>
                {/* 2 Hero section */}
               <Hero />

                {/* 3 Esperienza e Carosello con i linguaggi che uso lato front */}
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

                {/* Devo ancora rifletterci */}
                <section>
                    <h2>"Hello World"</h2>
                    <a href="">JavaScript</a>
                    <a href="">React</a>
                    {/* Da capire cosa mettere qui */}
                    <a href="">???</a>
                </section>

                {/* 4 Sezione framework e librerie */}
                <section>
                    <h4>Queste sono le tecnologie che ho usato</h4>
                    <div>
                        {/* Colonne */}

                        <div>
                            <p>Front-End Design</p>
                            <ul>
                                <li>React Js</li>
                                <li>Vite</li>
                                <li>Figma</li>
                                <li>Jest</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                            </ul>
                        </div>

                        <div>
                            <p>Linguaggi</p>
                            <ul>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>

                        <div>
                            <p>Devops</p>
                            <ul>
                                <li>Github</li>
                                <li>Vercel</li>
                                <li></li>
                            </ul>
                        </div>

                        <div>
                            <p>Back-end</p>
                            <ul>
                                <li>MySql2</li>
                                <li>Postman</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                            </ul>
                        </div>

                        <div>
                            <p>In progress</p>
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                            </ul>
                        </div>

                    </div>

                </section>
            </main>
        </>
    );
}