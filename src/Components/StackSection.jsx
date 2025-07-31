export default function StackSection() {
    return (
        <section className="full-width-breakout">
            <div className="tech-container">
                <div className="tech-row">

                    {/* Frontend Design */}
                    <div className="tech-col">
                        <h5>Frontend Design</h5>
                        <ul>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/React.png" alt="React" /></div>
                                <span>React</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/Vite.svg" alt="Vite" /></div>
                                <span>Vite</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/Figma.png" alt="Figma" /></div>
                                <span>Figma</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/Jest.png" alt="Jest" /></div>
                                <span>Jest</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/Bootstrap.png" alt="Bootstrap" /></div>
                                <span>Bootstrap</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/Tailwind.png" alt="Tailwind" /></div>
                                <span>Tailwind</span>
                            </li>
                        </ul>
                    </div>

                    {/* Linguaggi */}
                    <div className="tech-col">
                        <h5>Linguaggi</h5>
                        <ul>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/JavaScript.white.png" alt="JavaScript" /></div>
                                <span>JavaScript</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/TypeScript.png" alt="TypeScript" /></div>
                                <span>TypeScript</span>
                            </li>
                        </ul>
                    </div>

                    {/* DevOps */}
                    <div className="tech-col">
                        <h5>DevOps</h5>
                        <ul>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/github-original.png" alt="GitHub" /></div>
                                <span>GitHub</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/Vercel.png" alt="Vercel" /></div>
                                <span>Vercel</span>
                            </li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="tech-col">
                        <h5>Back-end</h5>
                        <ul>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/node.png" alt="Node.js" /></div>
                                <span>Node.js</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/Express.webp" alt="Express.js" /></div>
                                <span>Express.js</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/Postman.webp" alt="Postman" /></div>
                                <span>Postman</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/MySql2.png" alt="MySQL" /></div>
                                <span>MySQL</span>
                            </li>
                        </ul>
                    </div>

                    {/* Next Step */}
                    <div className="tech-col">
                        <h5>Next Step</h5>
                        <ul>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/php.png" alt="PHP" /></div>
                                <span>PHP</span>
                            </li>
                            <li className="img-lang">
                                <div className="logo-wrapper"><img src="/logos/Laravel.png" alt="Laravel" /></div>
                                <span>Laravel</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}