import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>

            {/* Main */}
            <main className="">
                {/* 2 Hero section */}
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
                        <img src="/photos/profile.JPG" alt=""/>
                    </div>

                </section>

                {/* 3 Esperienza e Carosello con i linguaggi che uso lato front */}
                <section>
                    <div>
                        <p>1 anno di</p>
                        <p>XP</p>
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
    )
}